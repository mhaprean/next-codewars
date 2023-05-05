'use client';

import { useState } from 'react';
import { IUser } from '../types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface IPropsEditAccountForm {
  user: IUser;
}

const EditAccountForm = ({ user }: IPropsEditAccountForm) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(user.name);

  const [image, setImage] = useState(user.image || '');
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null | undefined>(null);

  const uploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post<{ message: string; images: string[] }>('/api/upload', formData);

      return response.data.images.length > 0 ? response.data.images[0] : '';
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    let newPhoto = '';

    if (currentFile) {
      newPhoto = await uploadImage(currentFile);
    }

    axios
      .post('/api/update-account', { name, image: newPhoto })
      .then((response) => {
        toast.success('Account updated!');
        router.refresh();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
      setCurrentFile(e.target.files[0]);
    }

    reader.onload = (event) => {
      setImagePreview(event.target?.result);
    };
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="font-bold my-2">Edit account info: </h2>
      <label htmlFor="name" className="mt-2">
        Name:
      </label>
      <input type="text" name="name" id="name" className="border p-4 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="name" className="mt-2">
        Profile picture:
      </label>

      <input type="file" name="image" id="image" className="border p-4 rounded-md" onChange={handleFileChange} />

      <Image
        className="rounded-md"
        height="100"
        width="100"
        alt="Avatar"
        src={typeof imagePreview === 'string' ? imagePreview : user.image || '/avatar-placeholder.jpg'}
      />

      <button disabled={isLoading} className="bg-primary text-white p-4 rounded-md" onClick={handleSubmit}>
        {isLoading ? 'Loading... ' : 'Update account'}
      </button>
    </div>
  );
};

export default EditAccountForm;

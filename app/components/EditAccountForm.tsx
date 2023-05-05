'use client';

import { useState } from 'react';
import { IUser } from '../types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

interface IPropsEditAccountForm {
  user: IUser;
}

const EditAccountForm = ({ user }: IPropsEditAccountForm) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(user.name);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post('/api/update-account', { name })
      .then((response) => {
        const newUser: IUser = response.data;

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

  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="font-bold my-2">Edit account info: </h2>
      <label htmlFor="name" className="mt-2">
        Name:
      </label>
      <input type="text" name="name" id="name" className="border p-4 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />

      <button disabled={isLoading} className="bg-primary text-white p-4 rounded-md" onClick={handleSubmit}>
        {isLoading ? 'Loading... ' : 'Update account'}
      </button>
    </div>
  );
};

export default EditAccountForm;

'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../ui/Input';
import { useState } from 'react';
import CodeEditor from '../editor/CodeEditor';
import Split from 'react-split';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreateKataForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [initialCode, setInitialCode] = useState('aa');
  const [unitTests, setUnitTests] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      difficulty: 'easy',
      instructions: '',
      initialCode: '',
      unitTests: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/katas', data)
      .then((response) => {
        console.log('response ', response);

        toast.success('Kata created!');
        // router.push('/kata');
        reset();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col p-4 gap-2">
      <Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required />
      <Input id="difficulty" label="Difficulty" disabled={isLoading} register={register} errors={errors} required />

      <label htmlFor="instructions" className="font-bold">
        Instructions
      </label>
      <textarea
        id="instructions"
        className={`my-2 border ${errors['instructions'] ? 'text-rose-500' : 'text-zinc-400'}`}
        disabled={isLoading}
        {...register('instructions', { required: true })}
        required
      ></textarea>

      <label htmlFor="initialCode" className="font-bold">
        Initial Code
      </label>
      <textarea
        id="initialCode"
        className={`my-2 border ${errors['initialCode'] ? 'text-rose-500' : 'text-zinc-400'}`}
        disabled={isLoading}
        {...register('initialCode', { required: true })}
        required
      ></textarea>

      <label htmlFor="unitTests" className="font-bold">
        Unit Tests
      </label>
      <textarea
        id="unitTests"
        className={`my-2 border ${errors['unitTests'] ? 'text-rose-500' : 'text-zinc-400'}`}
        disabled={isLoading}
        {...register('unitTests', { required: true })}
        required
      ></textarea>

      <button className="bg-primary text-white p-4 rounded-md" onClick={handleSubmit(onSubmit)}>
        Create kata
      </button>

      {isLoading && <div>Is loading...</div>}
    </div>
  );
};

export default CreateKataForm;

import React from 'react';
import { Skeleton } from '../ui/Skeleton';

const EditAccountLoader = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Skeleton className="w-[140px] h-6 my-2 rounded-md" />

      <Skeleton className="w-[60px] h-6 mt-2 rounded-md" />

      <Skeleton className="w-full h-14  rounded-md" />

      <Skeleton className="w-[120px] h-6 mt-2 rounded-md" />

      <Skeleton className="w-full h-14  rounded-md" />

      <Skeleton className="w-[100px] h-[100px] rounded-md" />

      <Skeleton className="w-full h-14  rounded-md" />
    </div>
  );
};

export default EditAccountLoader;

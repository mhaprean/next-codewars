import React from 'react';
import { Skeleton } from '../ui/Skeleton';

const SolutionSkeleton = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col rounded-md">
      <div className="flex items-center my-2 mb-4 gap-2 flex-grow-0">
        <Skeleton className="w-8 h-8 rounded-full" />

        <Skeleton className="w-[70px] h-[20px] rounded-full" />
      </div>

      <div className="w-full h-[300px]">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};

export default SolutionSkeleton;

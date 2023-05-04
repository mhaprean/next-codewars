import { Skeleton } from '../ui/Skeleton';

const KataPageLoader = () => {
  return (
    <div className="flex w-full gap-2" style={{ height: `calc(100vh - 60px)` }}>
      <div className=" min-w-[250px]" style={{ width: '40%' }}>
        <div
          className="flex items-center h-[60px] flex-shrink-0 px-2
          bg-gray-200 dark:bg-gray-900 pl-2 md:pl-4"
        >
          <div className="flex items-center gap-2">
            <Skeleton className="rounded-md" style={{ width: '115px', height: '40px' }} />
            <Skeleton className="rounded-md" style={{ width: '80px', height: '40px' }} />
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-gray-800 max-w-7xl mx-auto px-4 md:px-6 py-8 h-[calc(100%-60px)] overflow-y-auto ml-2 md:ml-4">
          <div className="max-w-3xl mx-auto flex flex-col gap-2">
            <Skeleton className="rounded-md w-32 h-8 mt-2" />

            <div className="flex items-center gap-2">
              <Skeleton className="rounded-full w-20 h-8" />
              <Skeleton className="rounded-full w-8 h-8" />
              <Skeleton className="rounded-full w-8 h-8" />
              <Skeleton className="rounded-full w-8 h-8" />
            </div>

            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-36 h-5 mb-4" />

            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-20 h-5" />

            <Skeleton className="rounded-md w-28 h-5 mt-8" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />

            <Skeleton className="rounded-md w-28 h-5 mt-8" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />

            <Skeleton className="rounded-md w-28 h-5 mt-8" />
            <Skeleton className="rounded-md w-full h-5" />
            <Skeleton className="rounded-md w-full h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow pr-2 md:pr-4" style={{ width: '60%' }}>
        <div className="flex items-center gap-2 h-[60px] flex-shrink-0 px-2 bg-gray-200 dark:bg-gray-900">
          <Skeleton className="rounded-md mr-auto" style={{ width: '110px', height: '40px' }} />
          <Skeleton className="rounded-full w-8 h-8" />
          <Skeleton className="rounded-full w-8 h-8" />
        </div>
        <div className="flex flex-col h-full gap-2">
          <div className=" flex-grow overflow-y-auto min-h-[70%]">
            <Skeleton className="rounded-none w-full h-full" />
          </div>
          <div className=" overflow-y-auto flex-grow">
            <Skeleton className="rounded-none w-full h-full" />
          </div>
        </div>
        <div className="flex items-center px-2 py-4 gap-2 bg-gray-200 dark:bg-gray-900">
          <Skeleton className="rounded-md" style={{ width: '90px', height: '40px' }} />
          <Skeleton className="rounded-md" style={{ width: '120px', height: '40px' }} />

          <Skeleton className="rounded-md ml-auto" style={{ width: '70px', height: '40px' }} />
          <Skeleton className="rounded-md" style={{ width: '80px', height: '40px' }} />
        </div>
      </div>
    </div>
  );
};

export default KataPageLoader;

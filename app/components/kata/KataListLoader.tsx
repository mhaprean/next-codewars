import { Skeleton } from '../ui/Skeleton';

const KataListLoader = () => {
  const katas = ['140px', '70px', '44px', '110px', '85px', '65px', '40px'];

  return (
    <div className="flex flex-col gap-2 mt-2">
      <Skeleton className="w-[90px] h-[24px] my-2" />
      {katas.map((kata, idx) => (
        <div key={idx} className="w-full border rounded-md p-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
          <Skeleton className={`h-5 rounded-md`}  style={{width: kata}} />
          <div className="py-4">
            <Skeleton className="w-[60px] h-6 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KataListLoader;

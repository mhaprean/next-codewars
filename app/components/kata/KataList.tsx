import { IKata } from '../../types';
import Link from 'next/link';

interface IPropsKataList {
  katas: IKata[];
}

const KataList = ({ katas }: IPropsKataList) => {
  return (
    <div className="flex flex-col gap-2">
      {katas.map((kata, idx) => (
        <Link href={`/kata/${kata.id}`} key={kata.id} className="w-full">
          <div className="border rounded-md p-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
            <p className="font-bold font-large text-gray-700 dark:text-gray-100">{kata.title}</p>
            <div className="py-4">
              <span className="bg-orange-500/30 rounded-full px-3 py-1 text-orange-600 dark:text-orange-400">{kata.difficulty}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KataList;

import { IKata } from '../../types';
import Link from 'next/link';
import KataDifficulty from './KataDifficulty';

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
              <KataDifficulty difficulty={kata.difficulty} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KataList;

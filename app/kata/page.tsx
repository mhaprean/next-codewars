import Link from 'next/link';
import getKatas from '@/app/actions/getKatas';

export default async function Kata() {
  const katas = await getKatas();

  return (
    <div
      // className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl"
      className="w-full p-4"
    >
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
    </div>
  );
}

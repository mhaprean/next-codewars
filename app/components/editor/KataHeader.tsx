'use client';

import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { RiShareForward2Fill } from 'react-icons/ri';
import { useState } from 'react';

interface IPropsKataHeader {}

const KataHeader = (props: IPropsKataHeader) => {
  const [fav, setFav] = useState(false);

  const toggleFavorite = () => {
    setFav((prev) => !prev);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Integer to Roman</h1>
      <div className="flex items-center gap-2 my-4">
        <span className="bg-orange-500/30 rounded-full px-3 py-1 text-orange-600 dark:text-orange-400">Medium</span>

        <button onClick={toggleFavorite} className="text-yellow-400 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
          {fav ? <TiStarFullOutline className="w-full h-full" /> : <TiStarOutline className="w-full h-full" />}
        </button>

        <button className="text-gray-500 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
          <RiShareForward2Fill className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default KataHeader;

'use client';

import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

import { RiShareForward2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { IKata } from '../../types';
import KataDifficulty from '../kata/KataDifficulty';

interface IPropsKataHeader {
  kata: IKata;
}

const KataHeader = ({ kata }: IPropsKataHeader) => {
  const [fav, setFav] = useState(false);
  const [like, setLike] = useState(false);

  const toggleFavorite = () => {
    setFav((prev) => !prev);
  };

  const toggleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{kata.title}</h1>
      <div className="flex items-center gap-2 my-4">
        <KataDifficulty difficulty={kata.difficulty} />

        <button
          onClick={toggleFavorite}
          className="text-orange-500 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
        >
          {fav ? <TiStarFullOutline className="w-full h-full" /> : <TiStarOutline className="w-full h-full" />}
        </button>

        <button
          onClick={toggleLike}
          className="text-cyan-600 dark:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
        >
          {like ? <AiFillLike className="w-full h-full" /> : <AiOutlineLike className="w-full h-full" />}
        </button>

        <button className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
          <RiShareForward2Fill className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default KataHeader;

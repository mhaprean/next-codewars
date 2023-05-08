'use client';

import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

import { RiShareForward2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { IKata, IUser } from '../../types';
import KataDifficulty from '../kata/KataDifficulty';
import axios from 'axios';
import toast from 'react-hot-toast';

interface IPropsKataHeader {
  kata: IKata;
  user: IUser | null;
}

const KataHeader = ({ kata, user }: IPropsKataHeader) => {
  const isLiked = user && user.favoriteKatas.includes(kata.id) ? true : false;
  const isBookmarked = user && user.bookmarkedKatas.includes(kata.id) ? true : false;
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [like, setLike] = useState(isLiked);

  const toggleBookmark = () => {
    const newBookmarkedVal = !bookmarked;

    setBookmarked(newBookmarkedVal);

    axios
      .post('/api/katas/bookmark', { kataId: kata.id, bookmarked: newBookmarkedVal })
      .then((response) => {
        const newKata: IKata = response.data;


        if (newBookmarkedVal) {
          toast.success('Kata bookmarked!');
        } else {
          toast.success('Kata removed from bookmarks');
        }

        
      })
      .catch(() => {
        toast.error('Error bookmarking the kata.');
        setBookmarked(bookmarked);
      })
      .finally(() => {});
  };

  const toggleLike = () => {
    const newLikedVal = !like;
    setLike(newLikedVal);

    axios
      .post('/api/katas/like', { kataId: kata.id, liked: newLikedVal })
      .then((response) => {
        const newKata: IKata = response.data;

        if (newLikedVal) {
          toast.success('Kata liked!');
        } else {
          toast.success('Kata like removed.');
        }

        
      })
      .catch(() => {
        toast.error('Something went wrong.');
        setLike(like);
      })
      .finally(() => {});
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{kata.title}</h1>
      <div className="flex items-center gap-2 my-4">
        <KataDifficulty difficulty={kata.difficulty} />

        <button
          onClick={toggleBookmark}
          className="text-orange-500 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
        >
          {bookmarked ? <TiStarFullOutline className="w-full h-full" /> : <TiStarOutline className="w-full h-full" />}
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

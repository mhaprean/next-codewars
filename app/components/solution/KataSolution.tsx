'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { ISolution, IUser } from '../../types';
import useAppTheme from '../../hooks/useAppTheme';
import Avatar from '../ui/Avatar';
import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
import { timeAgo } from '../../helpers/timeFormatter';

interface IPropsKataSolution {
  solution: ISolution;
  userId: string;
  openLogin: () => void;
}

const KataSolution = ({ solution, userId, openLogin }: IPropsKataSolution) => {
  const appTheme = useAppTheme();

  const [like, setLike] = useState(solution.likedBy.includes(userId));

  const [solutionLikes, setSolutionLikes] = useState(solution.likedBy);

  const toggleLike = () => {
    if (!userId) {
      openLogin();
      return;
    }

    const newLikedVal = !like;
    setLike(newLikedVal);

    const newSolutionLikes = newLikedVal ? [...solutionLikes, userId] : solutionLikes.filter((solution) => solution !== userId);
    setSolutionLikes(newSolutionLikes);

    axios
      .post('/api/solutions/like', { solutionId: solution.id, liked: newLikedVal })
      .then((response) => {
        const newSolution: ISolution = response.data;

        if (newLikedVal) {
          toast.success('Solution liked!');
        } else {
          toast.success('Solution like removed.');
        }
      })
      .catch(() => {
        toast.error('Something went wrong.');
        setLike(like);
      })
      .finally(() => {});
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col rounded-md">
      <div className="flex items-center my-2 mb-4 gap-2 flex-grow-0">
        <Link href={'/user/' + solution.userId}>
          <Avatar src={solution.user.image} />
        </Link>
        <Link href={'/user/' + solution.userId}>
          <p className="font-bold text-base text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white">
            {solution.user.name}
          </p>
        </Link>
      </div>
      <Highlight theme={appTheme.isDark ? themes.vsDark : themes.vsLight} code={solution.code} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="p-4 rounded-md overflow-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <div className="flex items-center gap-2 p-2">
        <button
          onClick={toggleLike}
          className="text-orange-500 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
        >
          {like ? <AiFillLike className="w-full h-full" /> : <AiOutlineLike className="w-full h-full" />}
        </button>

        <div className="rounded-full py-1 px-2 text-sm font-semibold bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300">
          <span>{solutionLikes.length === 1 ? '1 like' : `${solutionLikes.length} likes`}</span>
        </div>

        <div className="rounded-full py-1 px-2 text-sm font-semibold bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300">
          {timeAgo(solution.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default KataSolution;

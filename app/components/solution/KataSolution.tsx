'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { ISolution } from '../../types';
import useAppTheme from '../../hooks/useAppTheme';
import Avatar from '../ui/Avatar';
import { useState } from 'react';

interface IPropsKataSolution {
  solution: ISolution;
}

const KataSolution = ({ solution }: IPropsKataSolution) => {
  const appTheme = useAppTheme();

  const [like, setLike] = useState(false);

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col rounded-md">
      <div className="flex items-center my-2 mb-4 gap-2">
        <Avatar src={solution.user.image} /> <p className="font-bold text-base text-gray-600 dark:text-gray-300">{solution.user.name}</p>
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
      <div className="flex gap-2 p-2">
        <button
          onClick={() => {}}
          className="text-cyan-600 dark:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
        >
          {like ? <AiFillLike className="w-full h-full" /> : <AiOutlineLike className="w-full h-full" />}
        </button>
      </div>
    </div>
  );
};

export default KataSolution;

'use client';

import { Highlight, themes } from 'prism-react-renderer';

import { ISolution } from '../../types';
import useAppTheme from '../../hooks/useAppTheme';
import Avatar from '../ui/Avatar';

interface IPropsKataSolution {
  solution: ISolution;
}

const KataSolution = ({ solution }: IPropsKataSolution) => {
  const appTheme = useAppTheme();

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
    </div>
  );
};

export default KataSolution;

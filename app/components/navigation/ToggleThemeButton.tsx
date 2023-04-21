'use client';

import { useTheme } from 'next-themes';

import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const ToggleThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      className="dark:text-orange-200 text-gray-500 dark:hover:bg-gray-700 hover:bg-slate-100 rounded-full transition-all duration-200 flex items-center justify-center w-7 h-7"
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme == 'dark' ? <BsSunFill className="w-5 h-5" /> : <BsFillMoonStarsFill className="w-5 h-5" />}
    </button>
  );
};

export default ToggleThemeButton;

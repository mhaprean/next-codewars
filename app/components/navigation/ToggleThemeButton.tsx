'use client';

import { useTheme } from 'next-themes';

import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import useAppTheme from '@/app/hooks/useAppTheme';
import { useEffect } from 'react';

const ToggleThemeButton = () => {
  const appTheme = useAppTheme();

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleThemeSwitch = () => {
    if (theme == 'dark') {
      setTheme('light');
      appTheme.setLight();
    } else {
      setTheme('dark');
      appTheme.setDark();
    }
  };

  useEffect(() => {
    if (currentTheme === 'dark') {
      appTheme.setDark();
    } else {
      appTheme.setLight();
    }
  }, []);

  return (
    <button
      className="text-orange-300 dark:text-orange-200  dark:hover:bg-gray-700 hover:bg-slate-100 rounded-full transition-all duration-200 flex items-center justify-center w-7 h-7"
      onClick={handleThemeSwitch}
    >
      {currentTheme == 'dark' ? <BsSunFill className="w-5 h-5" /> : <BsFillMoonStarsFill className="w-5 h-5" />}
    </button>
  );
};

export default ToggleThemeButton;

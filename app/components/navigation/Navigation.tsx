'use client';

import React from 'react';
import Logo from '../Logo';
import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';
import { ISafeUser } from '../../types';
import ToggleThemeButton from './ToggleThemeButton';
import UserDropdown from './UserDropdown';

interface IPropsNavigation {
  currentUser?: ISafeUser | null;
}
const Navigation = ({ currentUser }: IPropsNavigation) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="w-full fixed top-0 left-0 border-b h-[60px] dark:border-gray-600 gap-2 p-2 md:p-4 font-semibold dark:bg-gray-800 bg-slate-50 z-30 flex items-center">
      <Logo />

      <div className="flex items-center ml-auto gap-2">
        <ToggleThemeButton />
        {!currentUser?.id && (
          <>
            <button onClick={registerModal.onOpen} className="p-2 bg-primary rounded-md text-slate-100">
              Register
            </button>

            <button onClick={loginModal.onOpen} className="p-2 bg-primary rounded-md text-slate-100">
              Login
            </button>
          </>
        )}
        {currentUser && <UserDropdown currentUser={currentUser} />}
      </div>
    </div>
  );
};

export default Navigation;

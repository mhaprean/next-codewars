'use client';

import React from 'react';
import Logo from '../Logo';
import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';

import { signOut } from 'next-auth/react';
import { ISafeUser } from '../../types';
import Avatar from '../ui/Avatar';
import ToggleThemeButton from './ToggleThemeButton';

interface IPropsNavigation {
  currentUser?: ISafeUser | null;
}
const Navigation = ({ currentUser }: IPropsNavigation) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="w-full fixed top-0 left-0 border-b gap-2 p-2 font-semibold dark:bg-gray-900 bg-slate-50 z-30 flex items-center">
      <Logo />

      <div className="flex items-center ml-auto gap-2">
        <ToggleThemeButton />
        {!currentUser?.id ? (
          <>
            <button onClick={registerModal.onOpen} className="p-2 bg-primary rounded-md text-slate-100">
              Register
            </button>

            <button onClick={loginModal.onOpen} className="p-2 bg-primary rounded-md text-slate-100">
              Login
            </button>
          </>
        ) : (
          <>
            <p className="text-blue-500">{currentUser.name}</p>
            <Avatar src={currentUser?.image || ''} />
            <button className="border" onClick={() => signOut()}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;

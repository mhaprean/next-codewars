'use client';

import React from 'react';
import Logo from './Logo';
import Modal from './ui/Modal';
import useRegisterModal from '../hooks/useRegisterModal';
import useLoginModal from '../hooks/useLoginModal';

const Navigation = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <div className="w-full fixed top-0 left-0 border-b gap-2 p-2 font-semibold bg-slate-50 z-30 flex items-center">
      <Logo />

      <button onClick={registerModal.onOpen} className="p-2 bg-blue-300 rounded-md ml-auto">
        SIGN UP
      </button>

      <button onClick={loginModal.onOpen} className="p-2 bg-blue-300 rounded-md">
        Login
      </button>

      {/* <Modal isOpen actionLabel='my modal here' /> */}
    </div>
  );
};

export default Navigation;

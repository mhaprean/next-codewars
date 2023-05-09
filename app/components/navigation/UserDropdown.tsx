'use client';

import Link from 'next/link';
import { IUser } from '../../types';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';
import { signOut } from 'next-auth/react';

import { FiSettings } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { MdCreate } from 'react-icons/md';
import { useState } from 'react';

interface IUserDropdown {
  currentUser: IUser;
}

const UserDropdown = ({ currentUser }: IUserDropdown) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  }

  return (
    <DropdownMenu open={open} onOpenChange={(val) => setOpen(val)} >
      <DropdownMenuTrigger asChild>
        <button className="hover:opacity-80 transition-all duration-100 rounded-full">
          <Avatar src={currentUser.image} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-100 dark:bg-gray-600 mx-2 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 py-2 px-1">
          <Avatar src={currentUser.image} /> <span>{currentUser.name}</span>
        </div>

        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-500" />

        <Link href={`/user/${currentUser.id}`} onClick={handleClick}>
          <div className=" flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-500 duration-200 transition-all">
            <div className="text-gray-500 dark:text-gray-300  rounded-md w-5 h-5">
              <FaUser className="w-full h-full" />
            </div>
            <span>View Profile</span>
          </div>
        </Link>

        <Link href={`/create-kata`} onClick={handleClick}>
          <div className=" flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-500 duration-200 transition-all">
            <div className="text-gray-500 dark:text-gray-300  rounded-md w-5 h-5">
              <MdCreate className="w-full h-full" />
            </div>
            <span>Create Kata</span>
          </div>
        </Link>

        <Link href={'/account/edit'} onClick={handleClick}>
          <div className=" flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-500 duration-200 transition-all">
            <div className="text-gray-500 dark:text-gray-300  rounded-md w-5 h-5">
              <FiSettings className="w-full h-full" />
            </div>
            <span>Account settings</span>
          </div>
        </Link>

        <button
          onClick={() => signOut()}
          className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-500 duration-200 transition-all"
        >
          <div className="text-gray-500 dark:text-gray-300  rounded-md w-5 h-5">
            <AiOutlinePoweroff className="w-full h-full" />
          </div>
          <span>Logout</span>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;

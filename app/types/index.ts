import { User, Kata, Solution } from '@prisma/client';

export interface IUser extends Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}

export interface IKata extends Omit<Kata, 'createdAt' | 'updatedAt'> {
  createdAt: string;
  updatedAt: string;
}

export interface ISolution extends Omit<Solution, 'createdAt' | 'updatedAt'> {
  createdAt: string;
  updatedAt: string;
}
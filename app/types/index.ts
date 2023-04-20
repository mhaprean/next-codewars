import { User } from '@prisma/client';

export interface ISafeUser extends Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}

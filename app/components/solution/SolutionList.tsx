'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import { ISolution, IUser } from '../../types';
import KataSolution from './KataSolution';

interface IPropsSolutionList {
  solutions: ISolution[];
  user: IUser | null;
}

const SolutionList = ({ solutions, user }: IPropsSolutionList) => {
  const loginModal = useLoginModal();

  return (
    <div className="flex flex-col gap-4">
      {solutions.map((solution, idx) => (
        <KataSolution key={solution.id} solution={solution} userId={user?.id || ''} openLogin={loginModal.onOpen} />
      ))}

      {solutions.length === 0 && <div className="font-bold mt-2 text-gray-600 dark:text-gray-300">No solutions available</div>}
    </div>
  );
};

export default SolutionList;

import getKataSolutions from '@/app/actions/getKataSolutions';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import KataSolution from '@/app/components/solution/KataSolution';
import SolutionList from '../../../components/solution/SolutionList';

interface IParams {
  kataId: string;
}

export default async function KataSolutions({ params }: { params: IParams }) {
  const solutions = await getKataSolutions(params);

  const currentUser = await getCurrentUser();

  if (!solutions) {
    return <div className="font-bold p-6">No solutions available...</div>;
  }

  return (
    <div className="flex flex-col p-4 w-full max-w-5xl">
      <ClientOnly>
        <SolutionList solutions={solutions} user={currentUser} />
      </ClientOnly>
    </div>
  );
}

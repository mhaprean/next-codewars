import getKataSolutions from '@/app/actions/getKataSolutions';
import ClientOnly from '@/app/components/ClientOnly';
import KataSolution from '@/app/components/solution/KataSolution';

interface IParams {
  kataId: string;
}

export default async function KataSolutions({ params }: { params: IParams }) {
  const solutions = await getKataSolutions(params);

  if (!solutions) {
    return <div className="font-bold p-6">No solutions available...</div>;
  }

  return (
    <div className="flex flex-col p-4 w-full max-w-5xl">
      <ClientOnly>
        <div className="flex flex-col gap-4">
          {solutions.map((solution, idx) => (
            <KataSolution key={solution.id} solution={solution} />
          ))}

          {solutions.length === 0 && <div className='font-bold mt-2 text-gray-600 dark:text-gray-300'>No solutions available</div>}
        </div>
      </ClientOnly>
    </div>
  );
}

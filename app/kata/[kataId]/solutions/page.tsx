import getKataSolutions from '@/app/actions/getKataSolutions';
import ClientOnly from '@/app/components/ClientOnly';
import KataSolution from '@/app/components/solution/KataSolution';

interface IParams {
  kataId: string;
}

export default async function KataSolutions({ params }: { params: IParams }) {
  const solutions = await getKataSolutions(params);

  console.log('!!! solutions ', solutions);

  if (!solutions) {
    return <div className="font-bold p-6">No solutions available...</div>;
  }

  return (
    <div className="flex flex-col p-4 w-full max-w-5xl">
      <ClientOnly>
        <div className="flex flex-col gap-4">
          {solutions.map((solution, idx) => (
            // <div key={solution.id}>{solution.id}</div>

            <KataSolution key={solution.id} solution={solution} />
          ))}
        </div>
      </ClientOnly>
    </div>
  );
}

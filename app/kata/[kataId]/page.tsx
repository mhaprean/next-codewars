import getKataById from '../../actions/getKataById';
import ClientOnly from '../../components/ClientOnly';
import KataContent from '../../components/editor/KataContent';

interface IParams {
  kataId: string;
}

export default async function Kata({ params }: { params: IParams }) {
  const kata = await getKataById(params);

  if (!kata) {
    return <div className="font-bold p-6">Wrong kata id...</div>;
  }

  return (
    <div className="w-full">
      <ClientOnly>
        <KataContent kata={kata} />
      </ClientOnly>
    </div>
  );
}

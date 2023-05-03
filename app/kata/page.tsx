import getKatas from '@/app/actions/getKatas';
import ClientOnly from '../components/ClientOnly';
import KataList from '../components/kata/KataList';

export default async function Kata() {
  const katas = await getKatas();

  if (!katas) {
    return (
      <ClientOnly>
        <div>No katas available...</div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="flex flex-col p-4 w-full max-w-5xl">
        <KataList katas={katas} />
      </div>
    </ClientOnly>
  );
}

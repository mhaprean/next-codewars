import ClientOnly from '../components/ClientOnly';
import CreateKataForm from '../components/kata/CreateKataForm';

export default function CreateKata() {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-5xl">
      <ClientOnly>
        <CreateKataForm />
      </ClientOnly>
    </div>
  );
}

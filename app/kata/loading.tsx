import KataListLoader from '../components/kata/KataListLoader';

const Loading = () => {
  return (
    <div className="flex flex-col p-4 w-full max-w-5xl">
      <KataListLoader />
    </div>
  );
};

export default Loading;

const Loading = () => {
  return (
    <div className="flex h-[100vh-60px]">
      <div className="bg-slate-100 dark:bg-gray-800 w-[40%]">

        <p>loading single kata page</p>
      </div>
      <div className="flex flex-col flex-grow w-[60%]">
        <p>loading...</p>
      </div>
    </div>
  );
};

export default Loading;

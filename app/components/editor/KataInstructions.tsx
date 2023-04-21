interface IPropsKataInstructions {
  content: string;
}

const KataInstructions = ({ content }: IPropsKataInstructions) => {
  return (
    <div
      className="w-full mx-2 [&>*]:text-lg 
      [&>pre]:p-2 [&>pre]:rounded-md [&>pre]:my-4 [&>pre]:whitespace-pre-wrap [&>pre]:bg-slate-200 
    [&>p>code]:bg-slate-200 [&>p>code]:px-1 [&>p>code]:border [&>p>code]:border-gray-300 [&>p>code]:rounded-sm
    [&>p>code]:text-gray-600
    dark:[&>p>code]:bg-gray-700 dark:[&>p>code]:text-gray-400 dark:[&>p>code]:border-gray-500
      dark:[&>pre]:bg-gray-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default KataInstructions;

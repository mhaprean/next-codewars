interface IPropsChipInfo {
  text: string;
}

const ChipInfo = ({ text }: IPropsChipInfo) => {
  return <div className="rounded-full py-1 px-2 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-300">
    {text}
  </div>;
};

export default ChipInfo;

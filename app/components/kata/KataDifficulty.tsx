interface IPropsKataDifficulty {
  difficulty: string;
}

const KataDifficulty = ({ difficulty }: IPropsKataDifficulty) => {
  return (
    <>
      {difficulty.toLowerCase() === 'easy' && (
        <span className="bg-green-500/30 rounded-full px-3 py-1 text-green-600 dark:text-green-400 font-bold">Easy</span>
      )}

      {difficulty.toLowerCase() === 'medium' && (
        <span className="bg-orange-500/30 rounded-full px-3 py-1 text-orange-600 dark:text-orange-400 font-bold">Medium</span>
      )}

      {difficulty.toLowerCase() === 'hard' && (
        <span className="bg-red-500/30 rounded-full px-3 py-1 text-red-600 dark:text-red-400 font-bold">Hard</span>
      )}
    </>
  );
};

export default KataDifficulty;

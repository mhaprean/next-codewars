import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center
    bg-gradient-to-br from-rose-50/50 via-indigo-100/50 to-blue-100/60
    dark:from-rose-900/10 dark:via-indigo-900/10 dark:to-blue-900/10
    "
    >
      <div className="mt-[100px] max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
        <h1
          className={` text-center text-4xl font-extrabold tracking-tight p-2


       bg-gradient-to-br from-blue-950 via-indigo-900 to-rose-900
       dark:from-blue-50 dark:via-indigo-200 dark:to-rose-400
       text-transparent bg-clip-text
       sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]`}
        >
          Welcome to Codewars. Improve your coding skills and programming thinking!
        </h1>
      </div>

      <Link href={'/kata'}>
        <button className="mt-10 px-6 py-4 text-lg rounded-md bg-primary text-white hover:opacity-80">Explore katas</button>
      </Link>
    </div>
  );
}

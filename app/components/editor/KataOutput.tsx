'use client';

interface IPropsKataOutput {
  error: {
    actual: string;
    expected: string;
    message: string;
  };
  message: string;
  errorMessage: string;
}

const KataOutput = ({ error, message, errorMessage }: IPropsKataOutput) => {
  return (
    <div>
      {error.message.length > 0 && (
        <div
          className="border border-red-700 rounded-md bg-red-600/20
                  text-gray-800 dark:text-gray-100 my-4 p-4 text-lg
                  "
        >
          <p className="text-red-950 dark:text-red-100 font-semibold text-md mb-4">{error.message}</p>

          <p className="my-2">
            Expected: <span className="font-bold"> {error.expected}</span>
          </p>
          <p className="my-2">
            Actual: <span className="font-bold"> {error.actual}</span>
          </p>
        </div>
      )}

      {errorMessage.length > 0 && (
        <div
          className="border border-red-700 rounded-md bg-red-600/20
                  text-gray-800 dark:text-gray-100 my-4 p-4 text-lg
                  "
        >
          <p className="text-red-950 dark:text-red-100 font-semibold text-md mb-4">{errorMessage}</p>
        </div>
      )}

      {message.length > 0 && (
        <div
          className="border border-green-800 rounded-md bg-green-600/20
                  text-green-900 dark:text-gray-100 my-4 p-4 text-lg"
        >
          <pre className="whitespace-pre-wrap text-green-950 dark:text-gray-100">{message}</pre>
        </div>
      )}
    </div>
  );
};

export default KataOutput;

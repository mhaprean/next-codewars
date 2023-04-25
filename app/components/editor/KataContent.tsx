'use client';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Split from 'react-split';
import KataInstructions from './KataInstructions';
import CodeEditor from './CodeEditor';
import { useState } from 'react';
import { FaRegComments, FaUnlockAlt, FaNodeJs } from 'react-icons/fa';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { RiShareForward2Fill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { CgExpand } from 'react-icons/cg';
import katas from '@/app/helpers/katas';

import chai from 'chai';
const assert = chai.assert;

const { initialCode, testsCode, content2 } = katas;

const extractFunction = (code: string) => {
  const funcRegex = /const\s+(\w+)\s*=\s*function\s*\(([^)]*)\)\s*\{([\s\S]*)\};?/g;
  const arrowFuncRegex = /const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*\{([\s\S]*)\};?/g;

  let funcMatch = funcRegex.exec(code);
  let arrowMatch = arrowFuncRegex.exec(code);

  if (!funcMatch && !arrowMatch) {
    throw new Error('Could not extract function from code.');
  }

  const match = funcMatch || arrowMatch;

  if (!match || match?.length < 4) {
    return () => {};
  }
  const name = match[1];
  const params = match[2];
  const body = match[3].replace(/\/\/(.*)\n|\/\*([\s\S]*?)\*\//g, '').trim();

  const fnParams = params.split(',').map((p) => p.trim());

  const fn = new Function(...fnParams, body);
  return fn;
};

const KataContent = () => {
  const fullScreen = useFullScreenHandle();

  const [code, setCode] = useState(initialCode);
  const [tests, setTests] = useState(testsCode);
  const [fav, setFav] = useState(false);

  const [output, setOutput] = useState('');
  const [error, setError] = useState<IErr>({ actual: '', expected: '', message: '' });

  interface IErr {
    actual: string;
    expected: string;
    message: string;
  }

  const runTests = () => {
    try {
      const fn = extractFunction(code);
      const result = fn(14);
      console.log('!!! result ', result);

      // Run some basic tests to provide initial feedback to the user
      const testResult = runBasicTests(fn);
      setOutput(testResult);
    } catch (error) {
      console.log('!!! error ', error);

      const err = error as unknown as IErr;
      let result = `
      ${err && err.message ? err.message : ''}

      Expected: ${err && err.expected ? err.expected : ''}
      Actual: ${err && err.actual ? err.actual : ''}
      `;

      setOutput(result);

      setError({ actual: err.actual, expected: err.expected, message: err.message });
    }
  };

  const runBasicTests = (solution: Function) => {
    let result = '';
    try {
      // Run some basic tests to provide initial feedback to the user
      assert.strictEqual(solution(1), 'I');
      assert.strictEqual(solution(4), 'IV');
      assert.strictEqual(solution(9), 'IX');
      assert.strictEqual(solution(10), 'X');
      assert.strictEqual(solution(50), 'L');
      assert.strictEqual(solution(100), 'C');
      assert.strictEqual(solution(500), 'D');
      assert.strictEqual(solution(1000), 'M');
      result = 'Basic tests passed!';

      eval(tests);
    } catch (error) {
      const err = error as unknown as IErr;
      console.error(error);
      result = 'Basic tests failed: ' + JSON.stringify((error as any).message);
      setError({ actual: err.actual, expected: err.expected, message: err.message });
    }
    return result;
  };

  const toggleFullScreen = () => {
    if (fullScreen.active) {
      fullScreen.exit();
    } else {
      fullScreen.enter();
    }
  };

  const toggleFavorite = () => {
    setFav((prev) => !prev);
  };

  return (
    <FullScreen handle={fullScreen}>
      <Split
        sizes={[40, 60]}
        direction="horizontal"
        className="flex pr-4"
        style={{ height: fullScreen.active ? '100vh' : `calc(100vh - 60px)` }}
      >
        <div className="bg-slate-100 dark:bg-gray-800 overflow-y-auto max-h-[100%]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
            <div className="max-w-3xl mx-auto">
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

              <div className="border p-2 border-gray-400">
                <pre className="whitespace-pre-wrap">{output}</pre>
              </div>

              <h1 className="text-2xl font-bold">Integer to Roman</h1>
              <div className="flex items-center gap-2 my-4">
                <span className="bg-orange-500/30 rounded-full px-3 py-1 text-orange-600 dark:text-orange-400">Medium</span>

                <button
                  onClick={toggleFavorite}
                  className="text-yellow-400 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
                >
                  {fav ? <TiStarFullOutline className="w-full h-full" /> : <TiStarOutline className="w-full h-full" />}
                </button>

                <button className="text-gray-500 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
                  <RiShareForward2Fill className="w-full h-full" />
                </button>
              </div>
              <KataInstructions content={content2} />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center p-2">
            <button className="px-3 py-2 flex items-center gap-1 text-gray-700 dark:text-gray-400 border rounded-md mr-auto">
              <FaNodeJs />
              Javascript
            </button>

            <button className="text-gray-500 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
              <FiSettings className="w-full h-full" />
            </button>

            <button
              onClick={toggleFullScreen}
              className="text-gray-500 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
            >
              <CgExpand className="w-full h-full" />
            </button>
          </div>
          <Split className="flex flex-col h-full" direction="vertical" sizes={[70, 30]}>
            <div className="bg-gray-300 dark:bg-gray-800 flex-grow overflow-y-auto">
              <CodeEditor value={code} onChange={setCode} />
            </div>
            <div className="bg-gray-300 dark:bg-gray-800 overflow-y-auto">
              <CodeEditor value={tests} onChange={setTests} />
            </div>
          </Split>
          <div className="flex items-center px-2 py-4 gap-2">
            <button
              className="px-3 py-2 border 
            flex items-center gap-1
            bg-primary/10 dark:bg-primary/5
            border-primary text-primary dark:text-gray-100 rounded-md hover:opacity-80"
            >
              <FaRegComments className="w-5 h-5s text-primary" />
              Disccusion
            </button>

            <button
              className="px-3 py-2 border 
            flex items-center gap-1 bg-primary/10 dark:bg-primary/5
            border-primary text-primary dark:text-gray-100 rounded-md hover:opacity-80"
            >
              <FaUnlockAlt className="w-5 h-5s text-primary" />
              Unlock solutions
            </button>

            <button
              onClick={runTests}
              // onClick={handleButtonClick}
              className="px-3 py-2 border border-primary text-primary  dark:text-gray-100
              bg-primary/10 dark:bg-primary/5
            rounded-md hover:opacity-80 ml-auto"
            >
              Test
            </button>
            <button className="px-3 py-2 bg-primary rounded-md hover:opacity-80 text-gray-100">Submit</button>
          </div>
        </div>
      </Split>
    </FullScreen>
  );
};

export default KataContent;

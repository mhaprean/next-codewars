'use client';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Split from 'react-split';
import KataInstructions from './KataInstructions';
import CodeEditor from './CodeEditor';
import { useState } from 'react';
import { FaRegComments, FaUnlockAlt, FaNodeJs } from 'react-icons/fa';
import { CgExpand } from 'react-icons/cg';
import katas from '@/app/helpers/katas';

import chai from 'chai';
import KataHeader from './KataHeader';
import classNames from 'classnames';
import KataOutput from './KataOutput';
import FontsizeDropdown from './FontsizeDropdown';
const assert = chai.assert;

interface IKata {
  id: string;
  title: string;
  instructions: string;
  initialCode: string;
  unitTests: string;
  difficulty: string;
  resolvedBy: string[];
}

interface IPropsKataContent {
  kata: IKata;
}

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

const KataContent = ({ kata }: IPropsKataContent) => {
  const fullScreen = useFullScreenHandle();

  const [activeTab, setActiveTab] = useState('instructions');

  const [fontSize, setFontSize] = useState('16px');

  const [code, setCode] = useState(kata.initialCode);
  const [tests, setTests] = useState(kata.unitTests);

  const [output, setOutput] = useState('');
  const [error, setError] = useState<IErr>({ actual: '', expected: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  interface IErr {
    actual: string;
    expected: string;
    message: string;
  }

  const runTests = () => {
    try {
      const fn = extractFunction(code);

      // Run some basic tests to provide initial feedback to the user
      const testResult = runBasicTests(fn);
      setOutput(testResult);
      setError({ actual: '', expected: '', message: '' });
    } catch (error) {
      console.log('!!! error ', error);

      const err = error as unknown as IErr;
      let result = `
      ${err && err.message ? err.message : ''}

      Expected: ${err && err.expected ? err.expected : ''}
      Actual: ${err && err.actual ? err.actual : ''}
      `;

      setOutput('');

      setError({ actual: err.actual, expected: err.expected, message: err.message });
    }
    setActiveTab('output');
  };

  const runBasicTests = (solution: Function) => {
    let result = '';
    try {
      eval(tests);
    } catch (error) {
      const err = error as unknown as IErr;
      console.error(error);
      console.log('DDDDDDD error ', error);
      let errorMsg = 'Basic tests failed: ' + JSON.stringify((error as any).message);
      setErrorMessage(errorMsg);
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

  return (
    <FullScreen handle={fullScreen}>
      <Split
        sizes={[40, 60]}
        direction="horizontal"
        className="flex"
        style={{ height: fullScreen.active ? '100vh' : `calc(100vh - 60px)` }}
      >
        <div className=" min-w-[250px]">
          <div
            className="flex items-center h-[60px] flex-shrink-0 px-2
           bg-gray-200 dark:bg-gray-900 pl-2 md:pl-4"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('instructions')}
                className={classNames(
                  'rounded-md py-2 px-3  ',
                  'hover:bg-gray-200 dark:hover:bg-gray-700/90',
                  'transition-all duration-200',
                  {
                    'bg-gray-300 dark:bg-gray-700': activeTab === 'instructions',
                  }
                )}
              >
                Instructions
              </button>

              <button
                onClick={() => setActiveTab('output')}
                className={classNames(
                  'rounded-md py-2 px-3  ',
                  'hover:bg-gray-200 dark:hover:bg-gray-700/90',
                  'transition-all duration-200',
                  {
                    'bg-gray-300 dark:bg-gray-700': activeTab === 'output',
                  }
                )}
              >
                Output
              </button>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-gray-800 max-w-7xl mx-auto px-4 md:px-6 py-8 h-[calc(100%-60px)] overflow-y-auto ml-2 md:ml-4">
            {activeTab === 'output' && (
              <div className="max-w-3xl mx-auto">
                <KataOutput error={error} message={output} errorMessage={errorMessage} />
              </div>
            )}
            {activeTab === 'instructions' && (
              <div className="max-w-3xl mx-auto">
                <KataHeader />
                <KataInstructions content={kata.instructions} />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-grow pr-2 md:pr-4">
          <div className="flex items-center h-[60px] flex-shrink-0 px-2 bg-gray-200 dark:bg-gray-900">
            <button className="px-3 py-2 flex items-center gap-1 text-gray-700 dark:text-gray-400 border rounded-md mr-auto">
              <FaNodeJs />
              Javascript
            </button>

            <FontsizeDropdown fontSize={fontSize} onChange={setFontSize} />

            <button
              onClick={toggleFullScreen}
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8"
            >
              <CgExpand className="w-full h-full" />
            </button>
          </div>
          <Split className="flex flex-col h-full" direction="vertical" sizes={[70, 30]}>
            <div className="bg-gray-300 dark:bg-gray-800 flex-grow overflow-y-auto">
              <CodeEditor value={code} onChange={setCode} fontSize={fontSize} />
            </div>
            <div className="bg-gray-300 dark:bg-gray-800 overflow-y-auto">
              <CodeEditor value={tests} onChange={setTests} fontSize={fontSize} />
            </div>
          </Split>
          <div className="flex items-center px-2 py-4 gap-2 bg-gray-200 dark:bg-gray-900">
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

'use client';

import Split from 'react-split';
import KataInstructions from './KataInstructions';
import CodeEditor from './CodeEditor';
import { useState } from 'react';
import { FaRegComments, FaUnlockAlt, FaNodeJs } from 'react-icons/fa';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { RiShareForward2Fill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { CgExpand } from 'react-icons/cg';

const KataContent = () => {
  const kataDescription = `<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n\n<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>\n\n<p>Return <em>the maximum amount of water a container can store</em>.</p>\n\n<p><strong>Notice</strong> that you may not slant the container.</p>\n\n<p>&nbsp;</p>\n
    <p><strong class="example">Example 1:</strong></p>\n<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />\n<pre>\n<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]\n<strong>Output:</strong> 49\n<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n</pre>\n\n
    <p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [1,1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n`;

  const content2 = `<p>Roman numerals are represented by seven different symbols:&nbsp;
  <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>
  <pre><strong>Symbol</strong>       <strong>Value</strong>
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  </pre><p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two one&#39;s added together. <code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p><p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p><ul>	<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.&nbsp;</li>	<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.&nbsp;</li>	<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li></ul><p>Given an integer, convert it to a roman numeral.</p><p>&nbsp;</p>
  
  <p><strong class="example">Example 1:</strong></p>
  <pre>
  <strong>Input:</strong> num = 3
  <strong>Output:</strong> &quot;III&quot;
  <strong>Explanation:</strong> 3 is represented as 3 ones.</pre>
  
  <p><strong class="example">Example 2:</strong></p>
  <pre>
  <strong>Input:</strong> num = 58
  <strong>Output:</strong> &quot;LVIII&quot;
  <strong>Explanation:</strong> L = 50, V = 5, III = 3.</pre>
  
  <p><strong class="example">Example 3:</strong></p>
  <pre>
  <strong>Input:</strong> num = 1994
  <strong>Output:</strong> &quot;MCMXCIV&quot;
  <strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.</pre>
  <p>&nbsp;</p>
  <p><strong>Constraints:</strong></p><ul>	<li><code>1 &lt;= num &lt;= 3999</code></li></ul>`;

  const initialCode = `
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const arr = [1000, 500, 100,50,10,5,1];
  const symbols = ['M', 'D','C','L','X','V','I'];
  let res = '';
  for(let i=0; i<arr.length; i++){
      res+=symbols[i].repeat(Math.floor(num/arr[i]));
      num = num%arr[i];
      if(i==0 && num>=900){
          res+='CM';
          num -=900;
      }else if(i==1 && num>=400){
          res+='CD';
          num-=400;
      }else if(i==2 && num>=90){
          res+='XC';
          num-=90;
      }else if(i==3 && num>=40){
          res+='XL';
          num-=40
      }else if(i==4 && num>=9){
          res+='IX';
          num-=9
      }else if(i==5 && num>=4){
          res+='IV';
          num-=4
      }
  }
  return res;
};
`;

  const testsCode = `
const chai = require('chai');
const assert = chai.assert;
  
describe("solution", function(){
  it ("should handle small numbers", function(){
    assert.strictEqual(solution(1), 'I', '1 should return "I"')
    assert.strictEqual(solution(2), 'II', '2 should return "II"')
    assert.strictEqual(solution(3), 'III', '3 should return "III"')
    assert.strictEqual(solution(4), 'IV', '4 should return "IV"')
    assert.strictEqual(solution(5), 'V', '5 should return "V"')
    assert.strictEqual(solution(9), 'IX', '9 should return "IX"')
    assert.strictEqual(solution(10), 'X', '10 should return "X"')
    assert.strictEqual(solution(11), 'XI', '11 should return "XI"')
    assert.strictEqual(solution(19), 'XIX', '19 should return "XIX"')
    assert.strictEqual(solution(22), 'XXII', '22 should return "XXII"')
    assert.strictEqual(solution(15), 'XV', '15 should return "XV"')
  });
  
  it ("should handle large numbers", function(){
    assert.strictEqual(solution(1000), 'M', '1000 should, "M"')
    assert.strictEqual(solution(1001), 'MI', '1001 should, "MI"')
    assert.strictEqual(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    assert.strictEqual(solution(2007), 'MMVII', '2007 should, "MMVII"')
    assert.strictEqual(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
  });
});
`;

  const [code, setCode] = useState(initialCode);
  const [tests, setTests] = useState(testsCode);

  return (
    <Split direction="horizontal" className="flex pr-4" style={{ height: `calc(100vh - 60px)` }}>
      <div className="bg-slate-100 dark:bg-gray-800 overflow-y-auto max-h-[100%]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Integer to Roman</h1>
            <div className="flex items-center gap-2 my-4">
              <span className="bg-orange-500/30 rounded-full px-3 py-1 text-orange-400">Medium</span>

              <button className="text-yellow-400 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
                <TiStarOutline className="w-full h-full" />
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

          <button className="text-gray-500 hover:bg-gray-700 duration-200 transition-all rounded-md p-1 w-8 h-8">
            <CgExpand className="w-full h-full" />
          </button>
        </div>
        <Split className="flex flex-col flex-grow" direction="vertical">
          <div className="bg-gray-300 dark:bg-gray-800 flex-grow overflow-y-auto" style={{ height: '20%' }}>
            <CodeEditor value={code} onChange={setCode} />
          </div>
          <div className="bg-gray-300 dark:bg-gray-800 overflow-y-auto" style={{ height: '10%' }}>
            <CodeEditor value={tests} onChange={setTests} />
          </div>
        </Split>
        <div className="flex items-center px-2 py-4 gap-2">
          <button
            className="px-3 py-2 border 
            flex items-center gap-1
            border-primary text-primary rounded-md hover:opacity-80"
          >
            <FaRegComments className="w-5 h-5s" />
            Disccusion
          </button>

          <button
            className="px-3 py-2 border 
            flex items-center gap-1
            border-primary text-primary rounded-md hover:opacity-80"
          >
            <FaUnlockAlt className="w-5 h-5s" />
            Unlock solutions
          </button>

          <button className="px-3 py-2 border border-primary text-primary rounded-md hover:opacity-80 ml-auto">Test</button>
          <button className="px-3 py-2 bg-primary rounded-md hover:opacity-80">Submit</button>
        </div>
      </div>
    </Split>
  );
};

export default KataContent;

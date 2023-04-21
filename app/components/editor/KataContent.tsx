'use client';

import ReactMarkdown from 'react-markdown';
import Split from 'react-split';
import CodeBlock from './CodeBlock';
import SyntaxHighlighter from 'react-syntax-highlighter';
import KataInstructions from './KataInstructions';

const KataContent = () => {
  const kataDescription =
    '<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n\n<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>\n\n<p>Return <em>the maximum amount of water a container can store</em>.</p>\n\n<p><strong>Notice</strong> that you may not slant the container.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />\n<pre>\n<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]\n<strong>Output:</strong> 49\n<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [1,1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n';

  const content2 = `<p>Roman numerals are represented by seven different symbols:&nbsp;
  <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>
  <pre><strong>Symbol</strong>       <strong>Value</strong>I             1V             5X             10L             50C             100D             500M             1000</pre><p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two one&#39;s added together. <code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p><p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p><ul>	<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.&nbsp;</li>	<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.&nbsp;</li>	<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li></ul><p>Given an integer, convert it to a roman numeral.</p><p>&nbsp;</p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> num = 3<strong>Output:</strong> &quot;III&quot;<strong>Explanation:</strong> 3 is represented as 3 ones.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> num = 58<strong>Output:</strong> &quot;LVIII&quot;<strong>Explanation:</strong> L = 50, V = 5, III = 3.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> num = 1994<strong>Output:</strong> &quot;MCMXCIV&quot;<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.</pre>
  <p>&nbsp;</p><p><strong>Constraints:</strong></p><ul>	<li><code>1 &lt;= num &lt;= 3999</code></li></ul>`;
  return (
    <div>
      <Split direction="horizontal" className="flex" style={{ height: `calc(100vh - 80px)` }}>
        <div className="bg-slate-100 dark:bg-gray-800 overflow-y-auto max-h-[100%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
              <KataInstructions content={content2} />
            </div>
          </div>
        </div>
        <Split className="flex flex-col" direction="vertical">
          <div className="bg-gray-300 dark:bg-gray-800 min-h-[200px] flex-grow overflow-y-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis temporibus fugiat facere dicta autem aliquam, unde rem hic
              soluta possimus, praesentium, quam quisquam omnis velit consequuntur sed? Consequatur, ipsa.
            </p>
          </div>
          <div className="bg-gray-300 dark:bg-gray-800 min-h-[50px] max-h-[300px] overflow-y-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis et tempore nostrum quas nihil doloremque consectetur
              eligendi, quaerat soluta, cumque quisquam culpa molestiae eum laborum, inventore repellendus illo optio.
            </p>
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default KataContent;

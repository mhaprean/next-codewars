'use client';

import ReactMarkdown from 'react-markdown';
import Split from 'react-split';
import CodeBlock from './CodeBlock';
import SyntaxHighlighter from 'react-syntax-highlighter';

const KataContent = () => {
  const kataDescription =
    '<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n\n<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>\n\n<p>Return <em>the maximum amount of water a container can store</em>.</p>\n\n<p><strong>Notice</strong> that you may not slant the container.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />\n<pre>\n<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]\n<strong>Output:</strong> 49\n<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [1,1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n';

  return (
    <div>
      <Split direction="horizontal" className="flex" style={{ height: `calc(100vh - 80px)` }}>
        <div className="bg-slate-200 overflow-y-auto max-h-[100%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose" dangerouslySetInnerHTML={{ __html: kataDescription }} />
            </div>
          </div>
        </div>
        <Split className="flex flex-col" direction="vertical">
          <div className="bg-gray-300 min-h-[200px] flex-grow overflow-y-auto">
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
          <div className="bg-gray-300 min-h-[50px] max-h-[300px] overflow-y-auto">
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

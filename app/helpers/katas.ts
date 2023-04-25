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
const intToRoman = function (num) {
  const arr = [1000, 500, 100, 50, 10, 5, 1];
  const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let res = '';

  for (let i = 0; i < arr.length; i++) {
    res += symbols[i].repeat(Math.floor(num / arr[i]));
    num = num % arr[i];
    if (i == 0 && num >= 900) {
      res += 'CM';
      num -= 900;
    } else if (i == 1 && num >= 400) {
      res += 'CD';
      num -= 400;
    } else if (i == 2 && num >= 90) {
      res += 'XC';
      num -= 90;
    } else if (i == 3 && num >= 40) {
      res += 'XL';
      num -= 40;
    } else if (i == 4 && num >= 9) {
      res += 'IX';
      num -= 9;
    } else if (i == 5 && num >= 4) {
      res += 'IV';
      num -= 4;
    }
  }
  return res;
};
`;

const testsCode = `

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

  assert.strictEqual(solution(1000), 'M', '1000 should return  "M"')
  assert.strictEqual(solution(1001), 'MI', '1001 should return  "MI"')
  assert.strictEqual(solution(1990), 'MCMXC', '1990 should return  "MCMXC"')
  assert.strictEqual(solution(2007), 'MMVII', '2007 should return  "MMVII"')
  assert.strictEqual(solution(2008), 'MMVIII', '2008 should return  "MMVIII"')

`;

const testsCode2 = `

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

const katas = {
  content2,
  initialCode,
  testsCode,
};

export default katas;

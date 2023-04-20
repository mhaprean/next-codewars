'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IPropsCodeBlock {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: IPropsCodeBlock) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

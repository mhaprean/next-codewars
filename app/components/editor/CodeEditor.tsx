'use client';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useState } from 'react';



interface IPropsCodeEditor {
  value: string;
  onChange: (newValue: string) => void;
}

const CodeEditor = ({ value, onChange }: IPropsCodeEditor) => {

  const handleChange = (newValue: string) => {
    console.log('change', newValue);
    onChange(newValue);
  };

  return (
    <AceEditor
      className="w-full h-full overflow-y-auto"
      value={value}
      mode="javascript"
      theme="monokai"
      fontSize={16}
      tabSize={2}
      onChange={handleChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={{ width: '100%', height: '100%', overflowY: 'auto' }}
    />
  );
};

export default CodeEditor;

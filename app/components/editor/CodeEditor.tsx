'use client';

import AceEditor from 'react-ace';
import { useTheme } from 'next-themes';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-one_dark';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/ext-language_tools';

import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-static_highlight';
import 'ace-builds/src-noconflict/ext-prompt';
import 'ace-builds/src-noconflict/ext-inline_autocomplete';

interface IPropsCodeEditor {
  value: string;
  onChange: (newValue: string) => void;
  fontSize?: string;
}

const CodeEditor = ({ value, onChange, fontSize = '16px' }: IPropsCodeEditor) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleChange = (newValue: string) => {
    console.log('change', newValue);
    onChange(newValue);
  };

  return (
    <AceEditor
      className="w-full h-full overflow-y-auto"
      value={value}
      mode="javascript"
      theme={currentTheme === 'dark' ? 'one_dark' : 'chrome'}
      fontSize={fontSize}
      tabSize={2}
      onChange={handleChange}
      editorProps={{ $blockScrolling: true }}
      style={{ width: '100%', height: '100%', overflowY: 'auto' }}
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        spellcheck: true,
        showPrintMargin: false,
      }}
    />
  );
};

export default CodeEditor;

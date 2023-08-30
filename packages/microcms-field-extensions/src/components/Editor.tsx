import { useFieldExtension } from '@hooks/useFieldExtension';
import type { editor } from 'monaco-editor';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';

type Props = {};

export const Editor: React.FC<Props> = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const { message, postData } = useFieldExtension<string | undefined>();
  const [data, setData] = useState('');

  useEffect(() => {
    editorRef.current?.setValue(message?.data ?? '');
  }, [message]);

  return (
    <div>
      <div className="overflow-hidden rounded border">
        <MonacoEditor
          height={500}
          defaultLanguage="markdown"
          defaultValue={message?.data ?? ''}
          options={{
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            renderLineHighlight: 'none',
          }}
          onMount={(editor) => {
            editorRef.current = editor;
          }}
          onChange={(value = '') => {
            postData({ data: value });
            setData(value);
          }}
        />
      </div>
      <p className="mt-1 text-right text-xs text-gray-400">{data.length}</p>
    </div>
  );
};

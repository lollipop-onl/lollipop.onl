import { useFieldExtension } from '@hooks/useFieldExtension';
import type { editor } from 'monaco-editor';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';

type Props = {};

export const Editor: React.FC<Props> = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [contentHeight, setContentHeight] = useState(0);
  const { message, postData } = useFieldExtension<string | undefined>();
  const [data, setData] = useState('');

  useEffect(() => {
    editorRef.current?.setValue(message?.data ?? '');
  }, [message]);

  return (
    <div>
      <div className="overflow-hidden rounded border">
        <div style={{ height: `${contentHeight}px` }}>
          <MonacoEditor
            defaultLanguage="markdown"
            defaultValue={(message?.data as string) ?? ''}
            options={{
              minimap: { enabled: false },
              lineNumbers: 'off',
              wordWrap: 'on',
              scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
              scrollBeyondLastLine: false,
            }}
            onMount={(editor) => {
              editorRef.current = editor;

              editor.onDidContentSizeChange((e) => {
                setContentHeight(e.contentHeight);
              });
            }}
            onChange={(value = '') => {
              postData({ data: value });
              setData(value);
            }}
          />
        </div>
      </div>
      <p className="mt-1 text-right text-sm text-gray-500">{data.length}</p>
    </div>
  );
};

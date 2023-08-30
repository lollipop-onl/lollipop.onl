import { useFieldExtension } from '@hooks/useFieldExtension';
import type { editor } from 'monaco-editor';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useEffect, useRef } from 'react';

type Props = {};

export const Editor: React.FC<Props> = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const { message, postData } = useFieldExtension<string | undefined>();

  useEffect(() => {
    editorRef.current?.setValue(message?.data ?? '');
  }, [message]);

  return (
    <div className="rounded border">
      <MonacoEditor
        defaultLanguage="markdown"
        defaultValue={(message?.data as string) ?? ''}
        options={{
          minimap: { enabled: false },
          lineNumbers: 'off',
          wordWrap: 'on',
          scrollBeyondLastLine: false,
        }}
        onMount={(editor) => (editorRef.current = editor)}
        onChange={(value) => postData({ data: value })}
      />
    </div>
  );
};

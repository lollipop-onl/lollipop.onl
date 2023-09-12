import { useFieldExtension } from '../hooks/useFieldExtension';
import { Range, type editor } from 'monaco-editor';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  workerURL: string;
};

const isTouchDevice =
  typeof window.ontouchstart !== 'undefined' && navigator.maxTouchPoints > 0;

export const Editor: React.FC<Props> = ({ workerURL }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const { message, postData } = useFieldExtension<string | undefined>();
  const [data, setData] = useState('');

  /** フィアルアップロードを実行する */
  const onPasteImage = async (file: File) => {
    const url = new URL(workerURL);

    url.pathname = '/gyazo/upload';

    const res = await fetch(url, {
      method: 'put',
      body: new Blob([file], { type: file.type }),
    });

    if (!res.ok) throw new Error('failed to upload');

    const { url: imageUrl, width, height } = await res.json();
    const editor = editorRef.current;
    const position = editor?.getPosition();

    if (!position || !editor) return;

    const size = width && height ? ` =${width}x${height}` : '';

    editor.executeEdits('', [
      {
        range: new Range(
          position.lineNumber,
          position.column,
          position.lineNumber,
          position.column,
        ),
        text: `\n![image](${imageUrl}${size})\n\n`,
      },
    ]);
  };

  useEffect(() => {
    editorRef.current?.setValue(message?.data ?? '');
  }, [message]);

  /** エディタにペーストイベントを仕込む */
  useEffect(() => {
    const callback = (e: ClipboardEvent) => {
      if (!e.clipboardData?.items) return;

      for (const item of e.clipboardData.items) {
        if (item.type.startsWith('image/')) {
          e.preventDefault();
          e.stopPropagation();

          const file = item.getAsFile();

          if (file) {
            onPasteImage(file);
          }
        }
      }
    };

    editorRef.current
      ?.getContainerDomNode()
      .addEventListener('paste', callback, true);

    return () =>
      editorRef.current
        ?.getContainerDomNode()
        .removeEventListener('paste', callback, true);
  }, [editorRef.current]);

  return (
    <div>
      <div className="border-sumi-300 overflow-hidden rounded border">
        {isTouchDevice ? (
          <textarea
            className="w-full"
            style={{ height: '500px' }}
            defaultValue={message?.data ?? ''}
            onChange={({ target }) => {
              if (target instanceof HTMLTextAreaElement) {
                postData({ data: target.value });
                setData(target.value);
              }
            }}
          />
        ) : (
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
        )}
      </div>
      <p className="mt-1 text-right text-xs text-gray-400">{data.length}</p>
    </div>
  );
};

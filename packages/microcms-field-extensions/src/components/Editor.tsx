import { useFieldExtension } from '@hooks/useFieldExtension';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useEffect } from 'react';

type Props = {};

export const Editor: React.FC<Props> = () => {
  const { message, postData } = useFieldExtension();

  useEffect(() => console.log(message), [message]);

  if (!message) return null;

  return (
    <MonacoEditor
      height={500}
      defaultLanguage="markdown"
      defaultValue={message.data as string}
      onChange={(value) => postData({ data: value })}
    />
  );
};

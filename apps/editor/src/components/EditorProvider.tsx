import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';
import { setupFieldExtension } from 'microcms-field-extension-api';
import { Context } from '@hooks/useFieldExtension';

type Props = {
  children: React.ReactNode;
};

export const EditorProvider: React.FC<Props> = ({ children }) => {
  const [fieldId, setFieldId] = useState<string>();
  const [message, setMessage] = useState<any>();
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    return setupFieldExtension({
      origin: '*',
      height: 0,
      width: '100%',
      onDefaultData({ data }) {
        setFieldId(data.id);
        setMessage(data.message);
      },
    });
  }, []);

  useEffect(() => {
    if (!fieldId) return;

    window.parent.postMessage(
      {
        id: fieldId,
        action: 'MICROCMS_UPDATE_STYLE',
        message: {
          height,
          width: '100%',
        },
      },
      '*',
    );
  }, [fieldId, height]);

  return (
    <Context.Provider
      value={{
        id: fieldId,
        origin,
        message,
      }}
    >
      <div ref={ref}>{children}</div>
    </Context.Provider>
  );
};

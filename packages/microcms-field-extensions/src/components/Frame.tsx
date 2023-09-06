import React, { useEffect, useState } from 'react';
import { setupFieldExtension } from 'microcms-field-extension-api';
import { useMeasure } from 'react-use';
import { FieldExtensionContext } from '../hooks/useFieldExtension';

type Props = {
  origin: string;
  children: React.ReactNode;
};

export const Frame: React.FC<Props> = ({ origin, children }) => {
  const [fieldId, setFieldId] = useState<string>();
  const [message, setMessage] = useState<any>();
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    return setupFieldExtension({
      origin,
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
      origin,
    );
  }, [fieldId, height]);

  return (
    <FieldExtensionContext.Provider
      value={{
        id: fieldId,
        origin,
        message,
      }}
    >
      <div ref={ref}>{children}</div>
    </FieldExtensionContext.Provider>
  );
};

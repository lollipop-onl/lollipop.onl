import React, { useEffect, useState } from 'react';
import { setupFieldExtension } from 'microcms-field-extension-api';
import { useMeasure } from 'react-use';

type Props = {
  origin: string;
  children: React.ReactNode;
};

export const Frame: React.FC<Props> = ({ origin, children }) => {
  const [count, setCount] = useState(0);
  const [fieldId, setFieldId] = useState<string>();
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    return setupFieldExtension({
      origin,
      onDefaultData({ data }) {
        setFieldId(data.id);
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
    <div ref={ref}>
      {children}
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Add Item</button>
      </div>
      <ul>
        {Array.from({ length: count }).map((_, i) => (
          <li key={i}>i:{i}</li>
        ))}
      </ul>
    </div>
  );
};

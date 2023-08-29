import { createContext, useCallback, useContext, useMemo } from 'react';
import {
  sendFieldExtensionMessage,
  Message,
} from 'microcms-field-extension-api';

export const FieldExtensionContext = createContext<{
  id?: string;
  origin?: string;
  message?: Message<any>;
}>({});

export const useFieldExtension = <T>() => {
  const context = useContext(FieldExtensionContext);

  const message = useMemo<Message<T> | undefined>(() => {
    return context.message;
  }, [context]);

  const postData = useCallback(
    (message: Message<T>) => {
      const { id, origin } = context;

      if (!id || !origin) return;

      sendFieldExtensionMessage(
        {
          id,
          message,
        },
        origin,
      );
    },
    [context],
  );

  return { message, postData };
};

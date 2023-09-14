/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORKER_EDITOR_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

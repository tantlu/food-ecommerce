/// <reference types="vite/client" />

// declare global replacement for env values
declare const __OBJECT_ENV__: string;
declare const __BASE_URI__: string;

// declare env values for typing suggestion
interface ImportMetaEnv {
  readonly VITE_APP_OBJECT_ENV: string;
  readonly REACT_APP_BASE_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // add more env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  glob(pattern: string): Record<string, () => Promise<unknown>>
}
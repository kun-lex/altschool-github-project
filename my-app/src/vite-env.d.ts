/// <reference types="vite/client" />
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        VITE_GITHUB_TOKENS: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }

  export {}
  
/// <reference types="vite/client" />
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GITHUB_TOKENS: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }

  export {}
  
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig(({ command, mode }) => {
  // mode is current mode
  // process.cwd() to get where env file locate
  // prefixes of loadEnv function is the prefix of the env properties
  // '' is load all env
  const env = loadEnv(mode, process.cwd(), '');
  // console.log('🚀 ~ file: vite.config.ts:11 ~ defineConfig ~ env:', env);

  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    envPrefix: ['VITE_', 'REACT_'],
    // should use for public variables because this will assign to a global value which expose on browser
    // value redefined need to be stringify
    define: {
      __OBJECT_ENV__: JSON.stringify(env.VITE_APP_OBJECT_ENV),
      __BASE_URI__: JSON.stringify(env.REACT_APP_BASE_URI),
    },
  };
});

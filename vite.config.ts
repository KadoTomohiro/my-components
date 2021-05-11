import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// https://vitejs.dev/config/
export default {
  build: {
    lib: {
      entry: '',
      name: '',
    },
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
  plugins: [createVuePlugin()],
}

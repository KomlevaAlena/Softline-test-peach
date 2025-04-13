import { defineConfig } from 'vite';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@scss/global/variables' as *;
          @use '@scss/global/mixins' as *;
        `,
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@scss': '/src/scss'
    }
  },
  plugins: [
    createSvgSpritePlugin({
      exportType: 'vanilla',
      include: '**/icons/*.svg'
    }),
  ],
});
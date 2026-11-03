import { defineConfig } from 'vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: isGitHubPages ? '/lp-konexo/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        // Preserve directory structure for assets
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/woff2?|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  css: {
    devSourcemap: true
  },
  esbuild: {
    target: 'es2022'
  }
});
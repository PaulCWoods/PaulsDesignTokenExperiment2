import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { name, version } from './package.json';
import fg from 'fast-glob';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDir = fs.readdirSync('./');

// the json result that will be generated
let themeFiles: string[] = [];

filesDir.forEach((file: string) => {
  console.log(file);
  if (fs.lstatSync(file).isDirectory()) {
    let fileContents = fg.globSync(`${file}/**`, {
      ignore: [
        '!build/js/**/*.js',
        '**/**/tier-1-definitions/*.json',
        '**/**/tier-2-usage',
        '**/**/tier-3-components/*.json',
        `**/build/css/${file}.css`
      ]
    });
    fileContents = fileContents;
    themeFiles.push(...fileContents);
  }
});

export default defineConfig({
  build: {
    sourcemap: false,
    outDir: '../../dist/subatomic-design-tokens',
    emptyOutDir: true,
    lib: {
      entry: './index.ts',
      formats: ['es']
    },
    rollupOptions: {
      input: fg.sync(['./index.ts']).map((file: string) => path.resolve(__dirname, file)),
      external: [/node_modules/, /\.(json|css|scss|sass|less|styl|png|jpe?g|gif|svg|ico|webp)$/]
    }
  },
  define: {
    pkgJson: { name, version }
  },
  plugins: [
    viteStaticCopy({
      structured: true,
      targets: [
        {
          src: 'package.json',
          dest: ''
        },
        {
          src: themeFiles.filter((file) => !file.includes('node_modules') && !file.includes('dist/')),
          dest: ''
        }
      ]
    }),
    {
      name: 'delete-dist-js',
      closeBundle() {
        const distFile = '../../dist/subatomic-design-tokens/subatomic-design-tokens.js';
        if (fs.existsSync(distFile)) {
          fs.unlinkSync(distFile);
        }
      }
    }
  ]
});

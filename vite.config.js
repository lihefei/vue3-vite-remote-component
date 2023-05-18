import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import pkg from './package.json';

const defaultConfig = {
  rollupOptions: {
    output: {
      globals: {
        vue: 'Vue',
        elementPlus: 'elementPlus'
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};

const libConfig = {
  build: {
    //minify: false,
    cssCodeSplit: true, // 将组件的 style 打包到 js 文件中
    outDir: 'dist-lib', // 输出打包后的组件目录
    lib: {
      target: 'esnext',
      formats: ['umd'], // 输出格式有 amd、es、cjs、iife、umd、system
      entry: path.resolve(__dirname, 'src/components/remote/ComponentA.vue'),
      name: 'MyComponent',
      fileName: (format) => `component-a.${pkg.version}.${format}.js`
    },
    // lib: {
    //   target: 'esnext',
    //   formats: ['umd'],
    //   entry: path.resolve(__dirname, 'src/components/remote/ComponentB.vue'),
    //   name: 'MyComponent',
    //   fileName: (format) => `component-b.${pkg.version}.${format}.js`
    // },
    rollupOptions: {
      external: ['vue', 'element-plus'], //忽略打进包的vue、element-plus依赖库
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          elementPlus: 'elementPlus'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  const url = loadEnv(mode, process.cwd()).VITE_BASEURL;
  const config = url === 'lib' ? libConfig : defaultConfig;
  return defineConfig(config);
};

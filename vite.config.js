// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

/*
 * @Description:脚手架配置文件
 * @Date: 2021-04-15 11:38:49
 * @LastEditTime: 2021-04-26 21:30:03
 * @FilePath: \warbler-homepage\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base:'./',
  // 定义别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
    utils: path.resolve(__dirname, 'src/utils'),
    components: path.resolve(__dirname, 'src/components'),
  },
  plugins: [vue()],
});

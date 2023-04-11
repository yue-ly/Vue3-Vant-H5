import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // 引入node path模块
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import path from 'path'
import { VantResolver } from 'unplugin-vue-components/resolvers';
// 因为vite中已经内联了postcss，所以并不需要额外的创建 postcss.config.js文件 
import postcsspxtoviewport from 'postcss-px-to-viewport'


export default ({ command, mode }) => {
  // 获取环境变量
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd());
  return defineConfig({
    define: {
      'process.env': env,
    },
    build: {
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      // minify默认esbuild，esbuild模式下terserOptions将失效
      // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
          drop_debugger: true, // 去除 debugger
        },
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/styles/index.less')}";`,
        },
      },
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
    plugins: [
      vue(),
      // 默认会向 index.html 注入 .env 文件的内容，类似 vite 的 loadEnv函数
      // 还可配置entry入口文件， inject自定义注入数据等
      // 其他地方使用配置文件（vue,ts,js等） 使用 import.meta.env
      createHtmlPlugin(),
      Components({
        dts: true,
        resolvers: [VantResolver()],
        types: [],
      }),
    ],
  });
};
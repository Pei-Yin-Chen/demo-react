import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/demo-react",
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要快取的圖示資料夾
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自訂插入位置
       * @default: body-last
       */
      inject: 'body-last', // 將生成的 SVG sprite 注入到 body 的最後

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  }
})

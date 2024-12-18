import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 
  // `VITE_` 前缀。

  const maximumFileSize = 6 * 1024 * 1024

  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(),
    VitePWA({
      strategies:"generateSW",
      registerType: 'autoUpdate',
      includeAssets: ["**/*"], /// update
      workbox: {
        // devOptions: {
        //   enabled: true
        // },
        // cleanupOutdatedCaches: false,
        sourcemap: true,
        globPatterns: ["**/*"], /// catch
        runtimeCaching: [{
          urlPattern: ({ url } ) => {
            return url.pathname.startsWith("/")
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "cache-data",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
        ],
        maximumFileSizeToCacheInBytes: maximumFileSize
      },
      manifest: {
        "name": "Nine Sols Keyboard",
        "short_name": "Nine Sols Keyboard",
        "icons": [
          {
            "src": "/public/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/public/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/public/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/public/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        "start_url": "/nine-sols-keyboard",
        "display": "fullscreen",
        "background_color": "#2E2B2B",
        "theme_color": "#2E2B2B",
        "description": "Nine Sols Font Keyboard"
      }
    })],
    build: {
      outDir: './build',
      emptyOutDir: true,
    },
    base: env.BASE_URL ?? "/nine-sols-keyboard/", /// ".",
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})
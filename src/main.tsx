import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App.tsx'
import './index.css'
const intervalMS = 7 * 24 * 60 * 60 * 1000
registerSW({
  onOfflineReady() { },
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update()
      }, intervalMS)
  },
  immediate: true
})()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

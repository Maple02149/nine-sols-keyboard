import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App.tsx'
import './index.css'
const intervalMS = 60 * 60 * 1000
const updateSW = registerSW({
  onOfflineReady() { },
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update()
      }, intervalMS)
  },
  onRegisterError(error) {
    console.error(new Date(), "onError", JSON.stringify(error))
  },
})
updateSW()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

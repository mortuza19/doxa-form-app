import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, type EmotionCache } from '@emotion/react'

import "./i18n/i18n"; // initialize i18n
import theme from './theme/theme.ts'
import './index.css'
import App from './App.tsx'
import createEmotionCache from './createEmotionCache.ts'

const clientSideEmotionCache: EmotionCache = createEmotionCache();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>,
)

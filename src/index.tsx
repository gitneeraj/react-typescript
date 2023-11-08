import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

import './i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import { Layout } from '@/components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Suspense fallback='loading...'>
      <ThemeProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
)

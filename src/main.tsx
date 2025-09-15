import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { RouterProvider } from 'react-router'
import { router } from './routes'
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'sonner';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </ReduxProvider>
  </StrictMode>,
)

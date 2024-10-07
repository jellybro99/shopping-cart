import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import routes from './components/routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={createBrowserRouter(routes)}/>
  </StrictMode>,
)

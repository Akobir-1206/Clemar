import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // To'g'ri import
import './index.css';
import { RouterProvider } from 'react-router-dom'; // To'g'ri router provider import
import router from './router/router.jsx';

// createRoot bilan ildizni yarating
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

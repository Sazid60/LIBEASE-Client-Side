import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)




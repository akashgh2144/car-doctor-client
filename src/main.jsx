import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'


import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Route/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
  </div>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Balloon from './Pages/Balloon.jsx';
import Form from './Pages/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Balloon></Balloon>
  },
  {
    path: "/form",
    element: <Form></Form>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

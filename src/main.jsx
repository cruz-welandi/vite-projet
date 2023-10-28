import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home';
import Students from './component/Students';
import Login from './component/Login';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/students",
    element: <Students/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

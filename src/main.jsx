import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUP from './assets/Pages/UserAuth/SignUP';
import Login from './assets/Pages/UserAuth/Login';
import AuthProvider from './providers/AuthProvider';
import Home from './assets/Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signUp",
    element: <SignUP></SignUP>
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

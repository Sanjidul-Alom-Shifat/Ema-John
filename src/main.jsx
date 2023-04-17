import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Components/Layout/HomeLayout';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import CardProductsLoaders from './Loaders/CardProductsLoders';
import SignUp from './Components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import AuthProviders from './Components/Providers/AuthProviders';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: CardProductsLoaders
      },
      {
        path: '/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProviders>
  </React.StrictMode>,
)

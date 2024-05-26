import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

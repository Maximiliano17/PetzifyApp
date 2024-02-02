import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Views/Home.jsx';
import Login from './Views/Login.jsx';
import Register from './Views/Register.jsx';
import Profile from './Views/Profile.jsx';
import Petshop from './Views/Petshop.jsx';
import Conexion from './ApíConexion/Conexion.jsx';

//Routes
const router = createBrowserRouter([ 
  {
    path: "/",
    element:(
      <App/>
    ),
  },
  {
    path:"/Login",
    element:(
       <Login />
    ),
  },
  {
    path:"/Register",
    element:(
       <Register />
    ),
  },
  {
    path:"/Home",
    element:(
       <Home />
    ),
  },
  {
    path:"/Profile",
    element:(
      <Profile />
    ),
  },
  {
    path:"/Petshop",
    element:(
      <Petshop />
    ),
  },
  {
    path:"/Conexion",
    element:(
      <Conexion />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


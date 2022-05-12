import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
 } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from './pages/login/Login';

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("user") !== null;
  console.log("isAuth", isAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />
};

export default function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/home'element={<PrivateRoute redirectTo="/"><Home/></PrivateRoute>}/>
        </Routes>
    </BrowserRouter>
  )
}


 
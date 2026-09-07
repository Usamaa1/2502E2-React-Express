import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Utils/MyNavbar';
import { Outlet } from 'react-router';


export const App = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Outlet></Outlet>
    </div>
  )
}


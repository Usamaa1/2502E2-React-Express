import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBootstrapNavbar from './utils/MyBootstrapNavbar';
import { Outlet } from 'react-router';






export const App = () => {
  return (
  <>
  
    <MyBootstrapNavbar></MyBootstrapNavbar>
    <Outlet></Outlet>
  </>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className='max-w-[1300px] mx-auto'>
        <div>
           <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
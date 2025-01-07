import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
                    return (
                                        <div className='bg-blue-900 text-white'>
                                       <div className='container mx-auto'>
                                       <Navbar></Navbar> 
                                       <div className='min-h-[calc(100vh-440px)]'>
                                       <Outlet></Outlet> 
                                       </div>
                                       </div>
                                        <Footer></Footer>                  
                                        </div>
                    );
};

export default MainLayout;
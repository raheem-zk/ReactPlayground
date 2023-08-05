import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './pages/About';
import ViewDetail from './pages/ViewDetails';
import LoginPage from './pages/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Profile from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
    return(
        <>
        <Header />
         <Outlet/>  
        <Footer />
        </>
    )
}

const appRoute = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/view-detail/:id',
                element: <ViewDetail/>
            },
            {
                path:'/login',
                element: <LoginPage />
            },
            {
                path:'/profile',
                element:<Profile/>
            }
        ],
    },
])


//async defer
root.render( 
    <RouterProvider router={ appRoute }/>
 )
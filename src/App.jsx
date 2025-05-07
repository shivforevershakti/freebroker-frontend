
import React from 'react';
import ErrorPage from './error//ErrorPage';
import ErrorBoundary from './error/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';


const App =()=> {
    const router = createBrowserRouter([
        {
            path: "",
            element: (
                <ErrorBoundary>
                     <Navbar />
                    <div>Hello</div>
                </ErrorBoundary>
            ),
        },
        {
            path: "login",
            element: (
                <ErrorBoundary>
                    <div>Hello</div>
                </ErrorBoundary>
            ),
        },
     
        {
            path: "register",
            element: (
                <ErrorBoundary>
                    <div>Hello</div>
                </ErrorBoundary>
            ),
        },
     
     
        {
            path: "properties",
            element: (
                <ErrorBoundary>
                   <div>Hello</div>
                </ErrorBoundary>
            ),
        },
       
        { path: "*", element: <ErrorPage /> },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;

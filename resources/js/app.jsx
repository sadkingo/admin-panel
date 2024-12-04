import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactDom from "react-dom/client"
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login";
import SingUp from "./pages/sign-up/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Dev from "./pages/dev/Dev";

const router = createBrowserRouter([{
    path: "/login",
    element: <Login />
}, {
    path: "/",
    element: <Dashboard/>
}, {
    path: "/sign-up",
    element: <SingUp />
}, {
    path: "/dev",
    element: (process.env.NODE_ENV === 'development')
        ? (<Dev />)
        : <ErrorPage
            errorNumber={404}
            errorTitle="Oops! This Page is Not Found."
            errorSubtitle="The requested page dose not exist"
        />
}, {
    path: "*",
    element: <ErrorPage
        errorNumber={404}
        errorTitle="Oops! This Page is Not Found."
        errorSubtitle="The requested page dose not exist"
    />
}
])
ReactDom.createRoot(document.getElementById("app")).render(<RouterProvider router={router} />)

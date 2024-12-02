import React from "react";
import ReactDom from "react-dom/client"
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import SingUp from "./pages/sign-up/SignUp";
import Error from "./pages/error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "*",
    element: <Error
        errorNumber={404}
        errorTitle="Oops! This Page is Not Found."
        errorSubtitle="The requested page dose not exist"
    />
}
])
ReactDom.createRoot(document.getElementById("app")).render(<RouterProvider router={router} />)

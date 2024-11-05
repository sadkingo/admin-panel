import React from "react";
import ReactDom from "react-dom/client"
import Login from "./pages/login/login";
import SingUp from "./pages/sing-up/singUp";
import Error from "./pages/error/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([{
    path: "/login",
    element: <Login />
}, {
    path: "/",
    element: <Login />
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

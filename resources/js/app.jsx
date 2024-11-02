import React from "react";
import ReactDom from "react-dom/client"
import Login from "./pages/login/login";
import SingUp from "./pages/sing-up/singUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([{
    path: "/login",
    element: <Login />
}, {
    path: "/sign-up",
    element: <SingUp />
}
])
ReactDom.createRoot(document.getElementById("app")).render(<RouterProvider router={router} />)

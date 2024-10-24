import React from "react";
import ReactDom from "react-dom/client"
import Logo from "./pages/logo/logo";

function App() {
    return <>
        <Logo scale={10}></Logo>
    </>
}

ReactDom.createRoot(document.getElementById("app")).render(<App />)
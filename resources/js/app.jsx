import React from "react";
import ReactDom from "react-dom/client"
import Login from "./pages/login/login";
function App() {
    return <Login>
    </Login>
}

ReactDom.createRoot(document.getElementById("app")).render(<App />)

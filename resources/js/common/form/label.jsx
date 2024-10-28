import React from "react"
import "./css/label.style.css"
export default function Label({ htmlFor, style = {}, children }) {
    return <label htmlFor={htmlFor} style={style}>{children}</label>
}

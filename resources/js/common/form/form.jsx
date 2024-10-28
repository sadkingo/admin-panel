import React from "react";
import "./css/form.style.css";
export default function Form({
    className,
    fields,
    action = "#",
    method = "get",
    target = "_self",
    enctype = "application/x-www-form-urlencoded",
    children }) {
    return <form className={"custom-form "+ className} action={action} method={method} target="self">
        {children}
    </form>
}

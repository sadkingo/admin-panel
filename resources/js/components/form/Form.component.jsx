import "./Form.style.css";

function Form({
    id,
    action = "#",
    method = "get",
    label = "",
    subLabel = "",
    children,
    className,
    options
}) {

    return <form
        className={className}
        id={id}
        action={action}
        method={method}
        {...options}
    >
        {label !== "" ? <h1>{label}</h1> : ""}
        {subLabel !== "" ? <h4>{subLabel}</h4> : ""}
        {children}
    </form>
}

export default Form;

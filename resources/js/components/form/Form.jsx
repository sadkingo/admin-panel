import "./css/form.style.css";
export default function Form({
    className = "",
    id,
    action = "#",
    method = "get",
    children,
    title = "",
    subtitle = "",
    ...options }) {
    return <form
        className={"custom-form " + className}
        id={id} action={action}
        method={method}
        {...options}
    >
        {title !== "" ? <h1>{title}</h1> : ""}
        {subtitle !== "" ? <h4>{subtitle}</h4> : ""}
        {children}
    </form>
}

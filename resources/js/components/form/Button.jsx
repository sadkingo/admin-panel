import "./css/button.style.css"
export default function Button({
    className,
    id,
    type = "submit",
    style = {},
    children,
    ...options
}) {
    return <button
        className={className}
        id={id}
        type="submit"
        style={style}
        {...options}
    >
        {children}
    </button>
}

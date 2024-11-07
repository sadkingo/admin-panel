import "./css/label.style.css"
export default function Label({
    className,
    id,
    style = {},
    htmlFor,
    children,
    ...options
}) {
    return <label
        className={className}
        id={id}
        htmlFor={htmlFor}
        style={style}
        {...options}
    >
        {children}
    </label>
}

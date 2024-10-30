import "./css/input.style.css"
export default function Input({
    className,
    id,
    style = {},
    children,
    ...options
}) {
    return <input
        className={className}
        id={id}
        style={style}
        {...options}
        defaultValue={children}
    >
    </input>
}

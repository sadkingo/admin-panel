import "./css/circle.css";
export default function Circle({ top, right, bottom, left, diameter }) {
    const style = {
        height: diameter || "0%",
        top: top ?? undefined,
        right: right ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined
    }

    return <div style={style} className="circle"></div>
}

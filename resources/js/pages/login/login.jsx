import "./login.style.css";
import Circle from "./circle";
export default function Login() {
    const circleProps = [
        { bottom: -40, left: -182, diameter: 590 },
        { bottom: -160, left: -240, diameter: 746 },
        { bottom: -286, left: -318, diameter: 996 },
        { bottom: -354, left: -521, diameter: 1514 },
    ];
    return <>
        <div className="left-content"></div>
        <div className="right-content circle-parent">
            {circleProps.map((circleProp, index) =>
                <Circle
                    key={index}
                    {...circleProp}
                ></Circle>)}
        </div>
    </>
}


import "./error.style.css";
import Circle from "../../components/circle/Circle";
import { Link } from "react-router-dom";

export default function Error({ errorNumber, errorTitle, errorSubtitle }) {
    const circleProps = [
        { id: 0, diameter: 938, top: "50%" },
        { id: 1, diameter: 1224, top: "50%" },
        { id: 2, diameter: 1430, top: "50%" },
        { id: 3, diameter: 1655, top: "50%" },
        { id: 4, diameter: 1900, top: "50%" },
    ]
    return (<main className="error-page">
        <div className="error-number">{errorNumber}</div>
        {circleProps.map(circleProp =>
            <Circle className="error-page-circle"
                key={circleProp.id}
                {...circleProp}
            />)}
        <div className="container" >
            <p className="title">{errorTitle}</p>
            <p className="subtitle">{errorSubtitle}</p>
            <Link to="/"><button className="back-btn">Back to Home</button></Link>
        </div>
    </main>
    );
}

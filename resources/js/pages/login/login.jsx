import "./login.style.css";
import Circle from "./circle";
import Logo from "../logo/logo"
export default function Login() {
    const circleProps = [
        { bottom: -40, left: -182, diameter: 590 },
        { bottom: -160, left: -240, diameter: 746 },
        { bottom: -286, left: -318, diameter: 996 },
        { bottom: -354, left: -521, diameter: 1514 },
    ];
    return <>
        <div className="left-content">
            <div className="head-logo">
                <Logo scale={0.5} />
                <p>Hope Ui</p>
            </div>
            <h1>Sign In</h1>
            <h4>Sign in to stay connected.</h4>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@example.com" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me?</label>
                <a href="#">Forgot Password</a>
                <button type="submit">Sign in</button>
            </form>
        </div>
        <div className="right-content circle-parent">
            {circleProps.map((circleProp, index) =>
                <Circle
                    key={index}
                    {...circleProp}
                ></Circle>)}
        </div>
    </>
}


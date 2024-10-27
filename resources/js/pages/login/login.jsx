import "./login.style.css";
import Circle from "../../common/circle";
import Logo from "../../common/logo"
import facebookLogo from "../../../images/logos/logos--facebook.svg"
import googleLogo from "../../../images/logos/logos--google-icon.svg"
import instagramLogo from "../../../images/logos/logos--instagram.svg"
import LinkedLogo from "../../../images/logos/logos--linkedin.svg"
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
            <p>or sign in with other accounts?</p>
            <div className="social-media-logos">
                <a href="#"><img src={googleLogo} alt="linkedin" /></a>
                <a href="#"><img src={facebookLogo} alt="linkedin" /></a>
                <a href="#"><img src={LinkedLogo} alt="linkedin" /></a>
                <a href="#"><img src={instagramLogo} alt="linkedin" /></a>
            </div>
            <p>Don’t have an account? <a href="#">Click here to sign up.</a></p>
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


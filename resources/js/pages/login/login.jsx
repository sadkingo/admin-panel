import "./login.style.css";
import { Link } from "react-router-dom";
import Circle from "../../components/circle/Circle"
import * as Ui from "../../components"
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
                <Ui.Logo scale={0.5} />
                <p>Hope Ui</p>
            </div>
            <Ui.Form title="Sign In" subtitle="Sign in to stay connected.">
                <Ui.Label htmlFor={"email"}>Email</Ui.Label>
                <Ui.Input type="email" name="email" id="email" placeholder="example@example.com" required />
                <Ui.Label htmlFor={"password"}>Password</Ui.Label>
                <Ui.Input type="password" name="password" id="password" required />
                <Ui.Input type="checkbox" name="remember" id="remember" />
                <Ui.Label htmlFor={"remember"}>Remember me?</Ui.Label>
                <a href="#">Forgot Password</a>
                <Ui.Button>Sign in</Ui.Button>
            </Ui.Form>
            <p>or sign in with other accounts?</p>
            <div className="social-media-logos">
                <a href="#"><img src={googleLogo} alt="linkedin" /></a>
                <a href="#"><img src={facebookLogo} alt="linkedin" /></a>
                <a href="#"><img src={LinkedLogo} alt="linkedin" /></a>
                <a href="#"><img src={instagramLogo} alt="linkedin" /></a>
            </div>
            <p>Don’t have an account? <Link to="/sign-up">Click here to sign up.</Link></p>
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


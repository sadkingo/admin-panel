import "./singUp.style.css";
import { Link } from "react-router-dom";
import Circle from "../../components/circle/Circle"
import * as Ui from "../../components"
import facebookLogo from "../../../images/logos/logos--facebook.svg"
import googleLogo from "../../../images/logos/logos--google-icon.svg"
import instagramLogo from "../../../images/logos/logos--instagram.svg"
import LinkedLogo from "../../../images/logos/logos--linkedin.svg"
export default function SingUp() {
    const circleProps = [
        { top: -40, right: -182, diameter: 593 },
        { top: -160, right: -240, diameter: 746 },
        { top: -318, right: -286, diameter: 996 },
        { top: -350, right: -354, diameter: 1172 },
        { top: -522, right: -354, diameter: 1514 },
    ];
    return <>
        <div className="sub-content circle-parent">
            {circleProps.map((circleProp, index) =>
                <Circle
                    key={index}
                    {...circleProp}
                ></Circle>)}
        </div>
        <div className="main-content">
            <div className="head-logo">
                <Ui.Logo scale={0.5} />
                <p>Hope Ui</p>
            </div>
            <Ui.Form title="Sign Up" subtitle="Create your Hope UI account.">
                <div className="input-group">
                    <Ui.Label htmlFor={"first-name"}>First Name</Ui.Label>
                    <Ui.Input type="text" name="first_name" id="first-name" required />
                </div>
                <div className="input-group">
                    <Ui.Label htmlFor="last-name">Last Name</Ui.Label>
                    <Ui.Input type="text" name="last_name" id="last-name" required />
                </div>
                <div className="input-group">
                    <Ui.Label htmlFor={"email"}>Email</Ui.Label>
                    <Ui.Input type="email" name="email" id="email" placeholder="example@example.com" required />
                </div>
                <div className="input-group">
                    <Ui.Label htmlFor={"tel"}>Phone No.</Ui.Label>
                    <Ui.Input type="tel" name="tel" id="tel" placeholder="+213" required />
                </div>
                <div className="input-group">
                    <Ui.Label htmlFor={"password"}>Password</Ui.Label>
                    <Ui.Input type="password" name="password" id="password" required />
                </div>
                <div className="input-group">
                    <Ui.Label htmlFor={"passwordConfirmation"}>Confirm password</Ui.Label>
                    <Ui.Input type="password" name="password_confirmation" id="passwordConfirmation" required />
                </div>
                <div className="custom-form center-elements">
                    <Ui.Input type="checkbox" name="remember" id="remember" />
                    <Ui.Label htmlFor={"remember"} >I agree with the terms of use</Ui.Label>
                </div>
                <Ui.Button>Sign in</Ui.Button>
            </Ui.Form>
            <p>or sign up with other accounts?</p>
            <div className="social-media-logos">
                <a href="#"><img src={googleLogo} alt="linkedin" /></a>
                <a href="#"><img src={facebookLogo} alt="linkedin" /></a>
                <a href="#"><img src={LinkedLogo} alt="linkedin" /></a>
                <a href="#"><img src={instagramLogo} alt="linkedin" /></a>
            </div>
            <p>Already have an Account <Link to="/login">Sign in</Link></p>
        </div>
    </>
}


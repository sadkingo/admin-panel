import "./login.style.css";
import { Link } from "react-router-dom";
import Circle from "@components/circle"
import * as Ui from "@components"
import facebookLogo from "@images/logos/logos--facebook.svg"
import googleLogo from "@images/logos/logos--google-icon.svg"
import instagramLogo from "@images/logos/logos--instagram.svg"
import LinkedLogo from "@images/logos/logos--linkedin.svg"
export default function Login() {
  const circleProps = [
    { bottom: -40, left: -182, diameter: 590 },
    { bottom: -160, left: -240, diameter: 746 },
    { bottom: -286, left: -318, diameter: 996 },
    { bottom: -354, left: -521, diameter: 1514 },
  ];
  return (
    <main className="login">
      <div className="login__content login__content--left">
        <div className="login__logo">
          <Ui.Logo scale={0.5} />
          <p className="login__brand-name">Hope Ui</p>
        </div>
        <Ui.Form className="login__form" title="Sign In" subtitle="Sign in to stay connected.">
          <Ui.Label htmlFor="email" className="login__label">Email</Ui.Label>
          <Ui.Input type="email" name="email" id="email" placeholder="example@example.com" required className="login__input" />
          <Ui.Label htmlFor="password" className="login__label">Password</Ui.Label>
          <Ui.Input type="password" name="password" id="password" required className="login__input" />
          <Ui.Input type="checkbox" name="remember" id="remember" className="login__checkbox" />
          <Ui.Label htmlFor="remember" className="login__label login__label--checkbox">Remember me?</Ui.Label>
          <a href="#" className="login__forgot-password">Forgot Password</a>
          <Ui.Button className="login__button">Sign in</Ui.Button>
        </Ui.Form>
        <p className="login__alt-text">or sign in with other accounts?</p>
        <div className="login__social-media">
          <a href="#" className="login__social-link"><img src={googleLogo} alt="Google" /></a>
          <a href="#" className="login__social-link"><img src={facebookLogo} alt="Facebook" /></a>
          <a href="#" className="login__social-link"><img src={LinkedLogo} alt="LinkedIn" /></a>
          <a href="#" className="login__social-link"><img src={instagramLogo} alt="Instagram" /></a>
        </div>
        <p className="login__signup-text">Don’t have an account? <Link to="/sign-up" className="login__signup-link">Click here to sign up.</Link></p>
      </div>
      <div className="login__content login__content--right circle-parent">
        {circleProps.map((circleProp, index) => (
          <Circle key={index} {...circleProp} className="login__circle"></Circle>
        ))}
      </div>
    </main>
  );
}


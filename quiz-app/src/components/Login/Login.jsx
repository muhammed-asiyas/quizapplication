import React from "react";
import image1 from "../Login/Container.png";
import "./Login.css";
import { GoArrowRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";

function Login() {
  return (
    <div className="login-all-container">
      <div className="login-first-section-container">
        <img className="login-icon" src={image1} alt="login" />
        <h1 className="silent-scolar-title">Silent Scholar</h1>
        <p className="login-second-head-title">
          I he Art of intentional Learning
        </p>
      </div>
      <div className="login-container">
        <h1 className="welcome-back">Welcome Back</h1>
        <p className="welcome-back-description">
          Please enter your credentials to continue your journey.
        </p>
        <div className="input-field-div">
          <label className="label-text">EMAIL ADDRESS</label>
          <input
            className="input-field-style"
            type="text"
            placeholder="Scholar@academy.edu"
          />
        </div>
        <div className="input-field-div">
          <div className="password-and-forgot-container">
            <label className="label-text">PASSWORD</label>
            <button className="forgot-btn">Forgot?</button>
          </div>
          <input
            className="input-field-style"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="sign-in-btn">
          Sign In
          <GoArrowRight className="arrow-right-sign-btn" />
        </button>
        <div className="hr-line-div">
          <hr className="hr-line-login" />
          <p className="hr-line-text">OR CONTINUE WITH</p>
          <hr className="hr-line-login" />
        </div>
        <div className="login-mode-items-container">
          <button className="login-mode-btn">
            <FcGoogle />
          </button>
          <button className="login-mode-btn">
            <BiLogoGmail />
          </button>
        </div>
      </div>
      <div className="login-last-section-container">
        <p className="dont-have-an-account-title">
          Don't have an account yet?{" "}
          <span className="create-an-account">Create an account</span>
        </p>
        <p className="login-last-description">"Knowledge is the only wealth that grows when shared."</p>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
function Loginform({ data }) {
  return (
    <>
      <div className="formdiv">
        <h1 className="login">Login</h1>
        <h5>UserName</h5>
        <input
          className="username"
          type={"text"}
          placeholder={"Enter UserName"}
        ></input>{" "}
        <div className="passworddiv">
          {" "}
          <h5>Password</h5>
          <input
            className="password"
            placeholder="EnterPassword"
            type={"password"}
          ></input>
          <button className="forgotpassword">Forgot Password?</button>
          <button className="btn">LogIn</button>
          <h4 className="myclass">Or Sign Up using</h4>
          <button className="facebook">
            <ImFacebook2 className="fbicon" />
          </button>
          <button className="twitter">
            <IoLogoTwitter className="twitterlogo" />
          </button>
          <button className="gmail">
            <SiGmail className="gmaillogo" />
          </button>
          <div className="otherdiv">
            <h5 className="using">OrSignUpusing</h5>
            <button className="last">SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loginform;

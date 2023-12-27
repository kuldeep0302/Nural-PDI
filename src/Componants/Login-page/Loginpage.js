import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const onClickLogin = () => {
    localStorage.setItem("token", "1234");
  };

  const [showPassword, setShowPassword] = useState(false);



  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-login">
        <div className="n-service-login">
          <h1 className="custom-h2">Nural PDI </h1>
        </div>
        <div className="form-loginpagemain">
          <div className="formfirst-loginpage">
            <form className="form-nural-service">
              <h3 className="l-y-a">Login into Your Account</h3>
              <div className="form-group">
                <div className="first-input">
                  <label className="text-lable" htmlFor="Accesskey">
                    Access Key
                  </label>
                  <input
                    className="text-input"
                    type="Accesskey"
                    id="Accesskey"
                    name="Accesskey"
                    required=""
                  />
                  <i className="far fa-envelope" />
                </div>
                <br />
                <div className="first-input">
                  <label className="text-lable" htmlFor="Username">
                    User Name
                  </label>
                  <input
                    className="text-input"
                    type="username"
                    id="username"
                    name="username"
                    required=""
                  />
                  <i className="far fa-envelope" />
                </div>
                <br />
                <div className="secound-input">
                  {" "}
                  <label className="text-lable">Password:</label>
                  <input
                    className="text-input"
                    type={showPassword ? "text" : "password"}
                    id="password"
                  />
                  <i className="fas fa-lock" />
                  <span className="toggle-password" onClick={togglePassword} />
                </div>
                <br />
                <div className="r-f">
                  <div className="check-box-withname">
                    {" "}
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <Link className="f-pass" to="/forget-password">
                    Forgot password?
                  </Link>
                </div>
                <button onClick={onClickLogin} className="button" type="submit">
                  Login
                </button>
              </div>
              <Link to="/Cap" className="login-here">
                Don't have an account ? Create an account
              </Link>
            </form></div>
          <div className="side-image-login">
          <img src="Photos/Login-img.png" className="side-image-first" alt="" />
          <img src="Photos/PoweredByNural.png" className="powerdby" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;

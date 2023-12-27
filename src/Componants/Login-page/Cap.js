import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Cap.css";

const Cap = () => {
  return (
    <div className="container-Fp">
      <div className="n-service-Fp">
        <h1 className="custom-h2">Nural Service-Express</h1>
      </div>

      <div className="main-fp">
        <div className="form-Fp">
          <form>
            <h3 className="l-y-a">Forget Password</h3>
            <div className="form-group">
              <label className="text-lable" htmlFor="Email">
                Email
              </label>
              <input
                className="text-input"
                type="email"
                id="Email"
                name="Email"
                required=""
              />
              <label className="text-lable" htmlFor="Password">
                Password
              </label>
              <input
                className="text-input"
                type="Password"
                id="Password"
                name="Password"
                required=""
              />
              <label className="text-lable" htmlFor="Re-Enter Password">
                Re-Enter Password
              </label>
              <input
                className="text-input"
                type="Reenter-Password"
                id="Reenter-Password"
                name="Reenter-Password"
                required=""
              />
            </div>
            <button type="submit" className="button">
              Create Account
            </button>
          </form>

          <Link to="/Loginpage" className="Capaccount-Fp">
            Already have an account? Login here
          </Link>
        </div>

        <div className="side-image-Fp">
          <img src="Photos/Login-img.png" alt="" className="side-image-first" />
          <img src="Photos/PoweredByNural.png" alt="" className="powerdby" />
        </div>
      </div>
    </div>
  );
};

export default Cap;

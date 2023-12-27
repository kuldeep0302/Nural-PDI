import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./forget-password.css";

const Fp = () => {
  return (
    <div className="container-Fp">
      <div className="n-service-Fp">
        <h1 className="custom-h2">Nural Service-Express </h1>
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
                type="Email"
                id="Email"
                name="Email"
                required=""
              />
            </div>
            <button type="submit" className="button">
              Reset Password
            </button>
          </form>
          {/* Use Link for navigation */}
          <Link to="/Loginpage" className="Loginaccount-Fp">
            Login Account
          </Link>
        </div>

        <div className="side-image-Fp">
          {/* Add alt attributes for images */}
          <img src="Photos/Login-img.png" className="side-image-first" alt="" />
          <img src="Photos/PoweredByNural.png" className="powerdby" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fp;

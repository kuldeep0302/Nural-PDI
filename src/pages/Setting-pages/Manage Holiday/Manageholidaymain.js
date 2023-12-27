import React from "react";
import "./Manageholidaymain.css";
import { Link } from "react-router-dom";

const Manageholidaymain = () => {
  return (
    <div className="Manageholidaymain-container">
      <div className="fistline-Manageholidaymain">
        <div className="namewithicone-Manageholidaymain">
          <p className="name-Manageholidaymain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Manageholidaymain">Manage Holiday</Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Manageholidaymain">
          <div className="firstdivicone-Manageholidaymain">
            <div className="iconefirst-Manageholidaymain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Manageholidaymain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Manageholidaymain">
            <Link to="/Manageholiday" download className="flex-container">
              <img
                src="./photos/Group 359467.png"
                alt="Download Icon"
                className="icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manageholidaymain;

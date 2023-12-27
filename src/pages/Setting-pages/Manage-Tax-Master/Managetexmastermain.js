import React from "react";
import { Link } from "react-router-dom";
import "./Managetexmastermain.css";

const Managetexmastermain = () => {
  return (
    <div className="Managetexmastermain-container">
      <div className="fistline-Managetexmastermain">
        <div className="namewithicone-Managetexmastermain">
          <p className="name-Managetexmastermain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <span>
                {" "}
                <Link to="/Managetexmastermain">Manage Tax Master</Link>{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="setting-icones-Managetexmastermain">
          <div className="firstdivicone-Managetexmastermain">
            <div className="iconefirst-Managetexmastermain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managetexmastermain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managetexmastermain">
            <Link to="/Managetexmaster" download className="flex-container">
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

export default Managetexmastermain;

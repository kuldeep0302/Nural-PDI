import React from "react";
import "./Managebrandmain.css";
import { Link } from "react-router-dom";

const Managebrandmain = () => {
  return (
    <div className="Managebrandmain-container">
      <div className="fistline-Managebrandmain">
        <div className="namewithicone-Managebrandmain">
          <p className="name-Managebrandmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Managebrandmain">Manage Brand</Link>
            </span>
          </p>
        </div>

        <div className="setting-icones-Managebrandmain">
          <div className="firstdivicone-Managebrandmain">
            <div className="iconefirst-Managebrandmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managebrandmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managebrandmain">
            <Link to="/Managebrand" download className="flex-container">
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

export default Managebrandmain;

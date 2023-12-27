import React from "react";
import "./Managemodelmain.css";
import { Link } from "react-router-dom";

const Managemodelmainmain = () => {
  return (
    <div className="Managemodelmainmain-container">
      <div className="fistline-Managemodelmainmain">
        <div className="namewithicone-Managemodelmainmain">
          <p className="name-Managemodelmainmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Managemodelmainmain">Manage Model</Link>
            </span>
          </p>
        </div>

        <div className="setting-icones-Managemodelmainmain">
          <div className="firstdivicone-Managemodelmainmain">
            <div className="iconefirst-Managemodelmainmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managemodelmainmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managemodelmainmain">
            <Link to="/Managemodel" download className="flex-container">
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

export default Managemodelmainmain;

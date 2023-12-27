import React from "react";
import "./Managezonemain.css";
import { Link } from "react-router-dom";

const Managezonemain = () => {
  return (
    <div className="Managezonemain-container">
      <div className="fistline-managezonemain">
        <div className="namewithicone-Managezonemain">
          <p className="name-Managezonemain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Managezonemain">Manage Zone</Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Managezonemain">
          <div className="firstdivicone-Managezonemain">
            <div className="iconefirst-Managezonemain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managezonemain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managezonemain">
            <Link to="/Managezone" download className="flex-container">
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

export default Managezonemain;

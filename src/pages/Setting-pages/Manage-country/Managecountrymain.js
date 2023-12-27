import React from "react";
import "./Managecountrymain.css";
import { Link } from "react-router-dom";

const Managecountrymain = () => {
  return (
    <div className="Managecountrymain-container">
      <div className="fistline-Managecountrymain">
        <div className="namewithicone-Managecountrymain">
          <p className="name-Managecountrymain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Managecountrymain">Manage Country</Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Managecountrymain">
          <div className="firstdivicone-Managecountrymain">
            <div className="iconefirst-Managecountrymain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managecountrymain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managecountrymain">
            <Link to="/Managecountry" download className="flex-container">
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

export default Managecountrymain;

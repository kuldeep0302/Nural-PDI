import React from "react";
import "./Managelocalitymain.css";
import { Link } from "react-router-dom";

const Managelocalitymain = () => {
  return (
    <div className="Managelocalitymain-container">
      <div className="fistline-Managelocalitymain">
        <div className="namewithicone-Managelocalitymain">
          <p className="name-Managelocalitymain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Managelocalitymain">Manage Locality</Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Managelocalitymain">
          <div className="firstdivicone-Managelocalitymain">
            <div className="iconefirst-Managelocalitymain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managelocalitymain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managelocalitymain">
            <Link to="/Managelocality" download className="flex-container">
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

export default Managelocalitymain;

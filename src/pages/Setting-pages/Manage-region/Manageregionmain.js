import React from "react";
import "./Manageregionmain.css";
import { Link } from "react-router-dom";

const Manageregionmain = () => {
  return (
    <div className="Manageregionmain-container">
      <div className="fistline-Manageregionmain">
        <div className="namewithicone-Manageregionmain">
          <p className="name-Manageregionmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <span> <Link to="/ManageRegionmain">Manage Region</Link> </span>
            </span>
          </p>
        </div>

        <div className="setting-icones-Manageregionmain">
          <div className="firstdivicone-Manageregionmain">
            <div className="iconefirst-Manageregionmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Manageregionmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Manageregionmain">
            <Link to="/Manageregion" download className="flex-container">
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

export default Manageregionmain;

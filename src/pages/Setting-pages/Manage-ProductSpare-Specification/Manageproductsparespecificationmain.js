import React from "react";
import { Link } from "react-router-dom";
import "./Manageproductsparespecificationmain.css";

const Manageproductsparespecificationmain = () => {
  return (
    <div className="Manageproductsparespecificationmain-container">
      <div className="fistline-Manageproductsparespecificationmain">
        <div className="namewithicone-Manageproductsparespecificationmain">
          <p className="name-Manageproductsparespecificationmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Manageproductsparespecificationmain">
                Manage Product and Spare Specification
              </Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Manageproductsparespecificationmain">
          <div className="firstdivicone-Manageproductsparespecificationmain">
            <div className="iconefirst-Manageproductsparespecificationmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Manageproductsparespecificationmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Manageproductsparespecificationmain">
            <Link
              to="/Manageproductsparespecification"
              download
              className="flex-container"
            >
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

export default Manageproductsparespecificationmain;

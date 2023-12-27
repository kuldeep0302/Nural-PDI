import React from "react";
import "./Manageproductcatgeorymain.css";
import { Link } from "react-router-dom";

const Manageproductcatgeorymain = () => {
  return (
    <div className="Manageproductcatgeorymain-container">
      <div className="fistline-Manageproductcatgeorymain">
        <div className="namewithicone-Manageproductcatgeorymain">
          <p className="name-Manageproductcatgeorymain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Manageproductcatgeorymain">
                Manage Product Catgeory
              </Link>
            </span>
          </p>
        </div>

        <div className="setting-icones-Manageproductcatgeorymain">
          <div className="firstdivicone-Manageproductcatgeorymain">
            <div className="iconefirst-Manageproductcatgeorymain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Manageproductcatgeorymain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Manageproductcatgeorymain">
            <Link
              to="/Manageproductcatgeory"
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

export default Manageproductcatgeorymain;

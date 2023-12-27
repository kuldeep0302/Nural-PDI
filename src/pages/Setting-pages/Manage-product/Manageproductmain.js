import React from "react";
import { Link } from "react-router-dom";
import "./Manageproductmain.css";

const Manageproductmain = () => {
  return (
    <div className="Manageproductmain-container">
      <div className="fistline-Manageproductmain">
        <div className="namewithicone-Manageproductmain">
          <p className="name-Manageproductmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <Link to="/Manageproductmain">Manage Product</Link>{" "}
            </span>
          </p>
        </div>

        <div className="setting-icones-Manageproductmain">
          <div className="firstdivicone-Manageproductmain">
            <div className="iconefirst-Manageproductmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Manageproductmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Manageproductmain">
            <Link to="/Manageproduct" download className="flex-container">
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

export default Manageproductmain;

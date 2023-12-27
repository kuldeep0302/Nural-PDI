import React from "react";
import "./Managestatemain.css";
import { Link } from "react-router-dom";

const Managestatemain = () => {
  return (
    <div className="Managestatemain-container">
      <div className="fistline-Managestatemain">
        <div className="namewithicone-Managestatemain">
          <p className="name-Managestatemain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <span>
                {" "}
                <Link to="/Managestatemain">Manage State</Link>{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="setting-icones-Managestatemain">
          <div className="firstdivicone-Managestatemain">
            <div className="iconefirst-Managestatemain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managestatemain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managestatemain">
            <Link to="/Managestate" download className="flex-container">
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

export default Managestatemain;

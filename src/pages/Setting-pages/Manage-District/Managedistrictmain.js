import React from "react";
import "./Managedistrictmain.css";
import { Link } from "react-router-dom";

const Managedistrictmain = () => {
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
                <span>
                  {" "}
                  <Link to="/Managedistrictmain">Manage District</Link>{" "}
                </span>
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
            <Link to="/Managedistrict" download className="flex-container">
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

export default Managedistrictmain;

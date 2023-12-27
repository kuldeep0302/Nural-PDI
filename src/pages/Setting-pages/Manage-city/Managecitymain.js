import React from "react";
import { Link } from "react-router-dom";
import "./Managecitymain.css";

const Managecitymain = () => {
  return (
    <div className="Managecitymain-container">
      <div className="fistline-Managecitymain">
        <div className="namewithicone-Managecitymain">
          <p className="name-Managecitymain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <span>
                {" "}
                <span>
                  {" "}
                  <span>
                    {" "}
                    <Link to="/Managecitymain">Manage City</Link>{" "}
                  </span>
                </span>
              </span>
            </span>
          </p>
        </div>

        <div className="setting-icones-Managecitymain">
          <div className="firstdivicone-Managecitymain">
            <div className="iconefirst-Managecitymain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Managecitymain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Managecitymain">
            <Link to="/Managecity" download className="flex-container">
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

export default Managecitymain;

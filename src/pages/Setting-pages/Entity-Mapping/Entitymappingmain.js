import React from "react";
import "./Entitymappingmain.css";
import { Link } from "react-router-dom";

const Entitymappingmain = () => {
  return (
    <div className="Entitymappingmain-container">
      <div className="fistline-Entitymappingmain">
        <div className="namewithicone-Entitymappingmain">
          <p className="name-Entitymappingmain">
            <span>
              <Link to="/Setting">Setting</Link> &gt;
            </span>
            <span>
              {" "}
              <span>
                {" "}
                <Link to="/Entitymappingmain">Entity Mapping</Link>{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="setting-icones-Entitymappingmain">
          <div className="firstdivicone-Entitymappingmain">
            <div className="iconefirst-Entitymappingmain">
              <img src="./photos/Group 359239 upload.png" alt="Download Icon" />
            </div>

            <div className="iconefirst-Entitymappingmain">
              <img
                src="./photos/Group 359241 download.png"
                alt="Download Icon"
              />
            </div>
          </div>

          <div className="addwithicone-Entitymappingmain">
            <Link to="/Entitymapping" download className="flex-container">
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

export default Entitymappingmain;

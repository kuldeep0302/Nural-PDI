import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./Managezone.css";

const Managezone = () => {
  const [value, setValue] = useState({});
  const history = useNavigate();

  function handleClick() {
    const saveButton = document.getElementById("save-button");
    saveButton.textContent = "Saved";
    saveButton.classList.add("saved");
    alert("Data saved successfully!");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", handleClick);
  });


  return (
    <div className="managezone-container">
      <div className="fistline-managezone">
        <p className="name-managezone">
          <span>
            <Link to="/Managezonemain">Manage Zone</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-managezone">
        <div className="name2-managezone">
          <p>Manage Zone</p>
        </div>
        <div className="textbox-main-Managezone">
          <div className="line-managezone">
            <div className="textinput-Managezone">
              <TextField
                id="standard-basic"
                label="Country Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managezone">
              <TextField
                id="standard-basic"
                label="Zone Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managezone">
              <TextField
                id="standard-basic"
                label="Display Order"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-managezone">
            <div className="textinput-Managezone">
              <TextField
                id="standard-basic"
                label="Remarks"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="button-managezone">
            {" "}
            <button
              className="CANCEL-managezone"
              type="button"
              onClick={() => {
                history("/Manageregionmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-managezone"
              type="button"
              onClick={handleClick}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managezone;

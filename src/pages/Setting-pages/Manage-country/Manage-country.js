import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./Managecountry.css";

const Managecountry = () => {
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

  const [value, setValue] = React.useState({});

  return (
    <div className="managecountry-container">
      <div className="fistline-managecountry">
        <p className="name-managecountry">
          <span>
            <Link to="/Managecountrymain">Manage country</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-managecountry">
        <div className="name2-managecountry">
          <p>Manage Country</p>
        </div>

        <div className="line-managecountry">
          <div className="textinput-managecountry">
            <TextField
              id="standard-basic"
              label="Country"
              variant="standard"
              onChange={(e, val) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-managecountry">
            <TextField
              id="standard-basic"
              label="Currency"
              variant="standard"
              onChange={(e, val) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-managecountry">
            <TextField
              id="standard-basic"
              label="Country Code"
              variant="standard"
              onChange={(e, val) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="line-managecountry">
          <div className="textinput-managecountry">
            <TextField
              id="standard-basic"
              label="Display Order"
              variant="standard"
              onChange={(e, val) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-managecountry">
            <TextField
              id="standard-basic"
              label="Remarks"
              variant="standard"
              onChange={(e, val) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-managecountry"></div>
        </div>

        <div className="button-managecountry">
          {" "}
          <button
            className="CANCEL-managecountry"
            type="button"
            onClick={() => {
              history("/Managecountrymain");
            }}
          >
            CANCEL
          </button>
          <button
            id="save-button"
            className="Save-managecountry"
            type="button"
            onClick={handleClick}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Managecountry;

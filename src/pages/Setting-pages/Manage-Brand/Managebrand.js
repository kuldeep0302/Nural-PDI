import React from "react";
import "./Managebrand.css";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const Managebrand = () => {
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
    <div className="Managebrand-container">
      <div className="fistline-Managebrand">
        <p className="name-Managebrand">
          <span>
            <Link to="/Managebrand">Manage Brand</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Managebrand">
        <div className="name2-Managebrand">
          <span>
            {" "}
            <p>Manage Brand</p>{" "}
          </span>
        </div>
        <div className="textbox-main-Managebrand">
          <div className="line-Managebrand">
            <div className="textinput-Managebrand">
              <TextField
                id="standard-basic"
                label="Brand Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managebrand">
              <TextField
                id="standard-basic"
                label="Brand Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managebrand"></div>
          </div>

          <div className="button-MManagebrand">
            <button
              className="CANCEL-Managebrand"
              type="button"
              onClick={() => {
                history("/Managebrandmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Managebrand"
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

export default Managebrand;

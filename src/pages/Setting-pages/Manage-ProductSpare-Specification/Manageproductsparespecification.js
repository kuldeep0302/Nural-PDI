import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Manageproductsparespecification.css";

const calltype = [];

const Manageproductsparespecification = () => {
  const history = useNavigate();

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

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
    <div className="Manageproductsparespecification-container">
      <div className="fistline-Manageproductsparespecification">
        <p className="name-Manageproductsparespecification">
          <span>
            <Link to="/Manageproductsparespecification">
              Manage Product and Spare Specification
            </Link>{" "}
            &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Manageproductsparespecification">
        <div className="name2-Manageproductsparespecification">
          <p>Manage Product and Spare Specification</p>{" "}
        </div>
        <div className="textbox-main-Manageproductsparespecification">
          <div className="line-Manageproductsparespecification">
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Sap Part Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Length"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Width"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Manageproductsparespecification">
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Height"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Gross Weight"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Net Weight"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Manageproductsparespecification">
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Scrap Weight"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Capacity"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Technology Type"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Manageproductsparespecification">
            <div className="textinput-Manageproductsparespecification">
              <TextField
                id="standard-basic"
                label="Container Type"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductsparespecification">
              <Autocomplete
                onChange={(e, val) => {
                  setValue({ ...value, role: val.title });
                }}
                {...calltypeDefaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="
                    Part Type"
                    variant="standard"
                  />
                )}
              />
            </div>
            <div className="textinput-Manageproductsparespecification"></div>
          </div>

          <div className="button-Manageproductsparespecification">
            <button
              className="CANCEL-Manageproductsparespecification"
              type="button"
              onClick={() => {
                history("/Manageproductsparespecification");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Manageproductsparespecification"
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

export default Manageproductsparespecification;

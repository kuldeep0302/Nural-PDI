import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Managesku.css";

const calltype = [];

const callsource = [];

const Managesku = () => {
  const history = useNavigate();

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

  const callsourceDefaultProps = {
    options: callsource,
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
    <div className="Managesku-container">
      <div className="fistline-Managesku">
        <p className="name-Managesku">
          <span>
            <Link to="/Managesku">Manage SKU</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Managesku">
        <div className="name2-Managesku">
          <p>Manage SKU</p>{" "}
        </div>
        <div className="textbox-main-Managesku">
          <div className="line-Managetexmaster">
            <div className="textinput-Managesku">
              <Autocomplete
                onChange={(e, val) => {
                  setValue({ ...value, role: val.title });
                }}
                {...callsourceDefaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Product Category"
                    variant="standard"
                  />
                )}
              />
            </div>

            <div className="textinput-Managesku">
              <div>
                <Autocomplete
                  onChange={(e, val) => {
                    setValue({ ...value, role: val.title });
                  }}
                  {...calltypeDefaultProps}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="Model" variant="standard" />
                  )}
                />
              </div>
            </div>

            <div className="textinput-Managesku">
              <TextField
                id="standard-basic"
                label="SKU Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Managesku">
            <div className="textinput-Managesku">
              <TextField
                id="standard-basic"
                label="SKU Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managesku">
              <TextField
                id="standard-basic"
                label="SKU Description"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Managesku">
              <TextField
                id="standard-basic"
                label="EAN Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="button-Managesku">
            <button
              className="CANCEL-Managesku"
              type="button"
              onClick={() => {
                history("/Manageskumain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Managesku"
              type="button"
              onClick={handleClick}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managesku;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Managemodel.css";

const calltype = [];

const callsource = [];

const Managemodel = () => {
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
    <div className="Managemodel-container">
      <div className="fistline-Managemodel">
        <p className="name-Managemodel">
          <span>
            <Link to="/Managemodel">Manage Model</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Managemodel">
        <div className="name2-Managemodel">
          <p>Manage Model</p>{" "}
        </div>
        <div className="textbox-main-Managemodel">
          <div className="line-Managemodel">
            <div className="textinput-Managemodel">
              <Autocomplete
                onChange={(e, val) => {
                  setValue({ ...value, role: val.title });
                }}
                {...callsourceDefaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField {...params} label="Brand" variant="standard" />
                )}
              />
            </div>

            <div className="textinput-Managemodel">
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

            <div className="textinput-Managemodel">
              <TextField
                id="standard-basic"
                label="Model Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Managemodel">
            <div className="textinput-Managemodel">
              <div>
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
                      label="Model Code"
                      variant="standard"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="button-Managemodel">
            <button
              className="CANCEL-Managemodel"
              type="button"
              onClick={() => {
                history("/Managemodelmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Managemodel"
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

export default Managemodel;

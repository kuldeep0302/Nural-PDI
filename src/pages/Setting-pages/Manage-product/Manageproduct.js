import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Manageproduct.css";

const calltype = [];

const Manageproduct = () => {
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
    <div className="Manageproduct-container">
      <div className="fistline-Manageproduct">
        <p className="name-Manageproduct">
          <span>
            <Link to="/Manageproduct">Manage Product</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Manageproduct">
        <div className="name2-Manageproduct">
          <p>Manage Product</p>{" "}
        </div>
        <div className="textbox-main-Manageproduct">
          <div className="line-Manageproduct">
            <div className="textinput-Manageproduct">
              <TextField
                id="standard-basic"
                label="Product Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproduct">
              <TextField
                id="standard-basic"
                label="Product Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproduct">
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
                      label="Product Category:"
                      variant="standard"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="line-Manageproduct">
            <div className="textinput-Manageproduct">
              <div>
                <Autocomplete
                  onChange={(e, val) => {
                    setValue({ ...value, role: val.title });
                  }}
                  {...calltypeDefaultProps}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="Status" variant="standard" />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="button-Manageproduct">
            {" "}
            <button
              className="CANCEL-Manageproduct"
              type="button"
              onClick={() => {
                history("/Manageproductmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Manageproduct"
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

export default Manageproduct;

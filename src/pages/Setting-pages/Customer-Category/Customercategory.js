import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Customercategory.css";

const calltype = [];

const Customercategory = () => {
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
    <div className="Customercategory-container">
      <div className="fistline-Customercategory">
        <p className="name-Customercategory">
          <span>
            <Link to="/Customercategory">Customer Category</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Customercategory">
        <div className="name2-Customercategory">
          <p>Customer Category</p>{" "}
        </div>
        <div className="textbox-main-Customercategory">
          <div className="line-Customercategory">
            <div className="textinput-Customercategory">
              <TextField
                id="standard-basic"
                label="Container Type"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Customercategory">
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
            <div className="textinput-Customercategory"> </div>
          </div>

          <div className="button-Customercategory">
            <button
              className="CANCEL-Customercategory"
              type="button"
              onClick={() => {
                history("/Customercategory");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Customercategory"
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

export default Customercategory;

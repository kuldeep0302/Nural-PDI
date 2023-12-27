import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Manageholiday.css";

const Manageholiday = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    role: "",
    workflowName: "",
  });

  const calltype = [];

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

  return (
    <div className="Manageholiday-container">
      <div className="fistline-Manageholiday">
        <p className="name-Manageholiday">
          <span>
            <Link to="/Manageholiday">Manage Holiday</Link> &gt;
          </span>
          <span>
            <Link to="#">Add</Link>
          </span>
        </p>
      </div>

      <div className="autocompleteform-Manageholiday">
        <div className="name2-Manageholiday">
          <p>Manage Holiday</p>
        </div>
        <div className="textbox-main-Manageholiday">
          <div className="line-Manageholiday">
            <div className="textinput-Manageholiday">
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
                    label="Entity Type"
                    variant="standard"
                  />
                )}
              />
            </div>

            <div className="textinput-Manageholiday">
              <TextField
                id="standard-basic"
                label="Overdraft Days"
                variant="standard"
                onChange={(e) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>

            <div className="date-input-Manageholiday">
              <label htmlFor="birthday">Valid From</label>
              <input type="date" id="birthday" name="birthday" />
            </div>
          </div>

          <div className="button-Manageholiday">
            {" "}
            <button
              className="CANCEL-Manageholiday"
              type="button"
              onClick={() => {
                navigate("/Manageentitycredittermmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Manageholiday"
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

export default Manageholiday;

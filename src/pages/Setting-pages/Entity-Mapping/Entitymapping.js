import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Entitymapping.css";

const calltype = [];

const Entitymapping = () => {
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
    <div className="Entitymapping-container">
      <div className="fistline-Entitymapping">
        <p className="name-Entitymapping">
          <span>
            <Link to="/Entitymapping">Entity Mapping</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Entitymapping">
        <div className="name2-Entitymapping">
          <p>Entity Mapping</p>{" "}
        </div>
        <div className="textbox-main-Entitymapping">
          <div className="line-Entitymapping">
            <div className="textinput-Entitymapping">
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
                      Entity Mapping Type"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
            <div className="textinput-Entitymapping">
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
                      Relation"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
            <div className="textinput-Entitymapping">
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
                      Primary Entity "
                    variant="standard"
                  />
                )}
              />
            </div>
          </div>

          <div className="line-Entitymapping">
            <div className="textinput-Entitymapping">
              <TextField
                id="standard-basic"
                label="Secondary Entity"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="button-Entitymapping">
            <button
              className="CANCEL-Entitymapping"
              type="button"
              onClick={() => {
                history("/Entitymappingmain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Entitymapping"
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

export default Entitymapping;

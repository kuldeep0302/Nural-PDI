import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import Button from "@mui/material/Button";
import "./Updateinformation.css";

const Updateinformation = () => {
  const [value, setValue] = useState({
    role: "",
    workflowName: "",
  });

  const calltype = [];

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

  return (
    <div className="Updateinformation-container">
      <div className="firstline-Updateinformation">Update Information</div>
      <div className="updateinformation-page">
        <div className="heading-Updateinformation">Update Information</div>
        <div className="line-Updateinformation">
          <div className="textinput-Updateinformation">
            <TextField
              id="standard-basic"
              label="Distributor Name"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>

          <div className="textinput-Updateinformation">
            <TextField
              id="standard-basic"
              label="Contact No."
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>

          <div className="textinput-Updateinformation">
            <TextField
              id="standard-basic"
              label="Alternate Contact No."
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

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
                <TextField {...params} label="State" variant="standard" />
              )}
            />
          </div>

          <div className="textinput-Manageholiday">
            <Autocomplete
              onChange={(e, val) => {
                setValue({ ...value, role: val.title });
              }}
              {...calltypeDefaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} label="City" variant="standard" />
              )}
            />
          </div>

          <div className="textinput-Manageholiday">
            <TextField
              id="standard-basic"
              label="Pincode"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="line-Manageholiday">
          <div className="textinput-Manageholiday">
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="heading2-Updateinformation">Alternate Address</div>
        <div className="line-Updateinformation">
          <div className="textinput-Manageholiday">
            <Autocomplete
              onChange={(e, val) => {
                setValue({ ...value, role: val.title });
              }}
              {...calltypeDefaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} label="State" variant="standard" />
              )}
            />
          </div>

          <div className="textinput-Manageholiday">
            <Autocomplete
              onChange={(e, val) => {
                setValue({ ...value, role: val.title });
              }}
              {...calltypeDefaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} label="City" variant="standard" />
              )}
            />
          </div>

          <div className="textinput-Updateinformation">
            <TextField
              id="standard-basic"
              label="Pincode"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="line-Manageholiday">
          <div className="textinput-Manageholiday">
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, workflowName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="buttons-Updateinformation">
          <span className="buttons-Updateinformation-span">
            <Button
              className="action-button"
              size="large"
              component="label"
              variant="contained"
              style={{ backgroundColor: "#32499F", color: "white" }}
            >
              Save
            </Button>
          </span>
          <span className="buttons-Updateinformation-span">
            <Button
              className="action-button"
              size="large"
              component="label"
              variant="contained"
              style={{ backgroundColor: "#32499F", color: "white" }}
            >
              Cancel
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Updateinformation;

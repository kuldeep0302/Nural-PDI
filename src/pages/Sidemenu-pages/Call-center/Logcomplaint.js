import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import "./Logcomplaint.css";

const calltype = [];

const Logcomplaint = () => {
  const [value, setValue] = useState({
    customerCompanyName: "",
  });

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

  return (
    <div className="Logcomplaint-container">
      <div className="firstbox-Logcomplaint">
        <h4 className="first-text-Logcomplaint">Log Complaint</h4>
      </div>

      <div className="buttonsfirst-Logcomplaint">
        <div>
          <button className="button-Logcomplaint">Log Calls</button>
        </div>
        <div>
          <button className="button-Logcomplaint">Log Status</button>
        </div>
      </div>

      <div className="main-page-Logcalls">
        <div className="firstbox-Logcomplaint">
          <h4 className="first-text-Logcomplaint">Log Product Complaint</h4>
        </div>
        <div className="line-Logcomplaint">
          <div className="textinput-Logcomplaint">
            <TextField
              id="standard-basic"
              label="Distributor Name"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, customerCompanyName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-Logcomplaint">
            <TextField
              id="standard-basic"
              label="Contact No."
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, ContactPersonName: e.target.value });
              }}
            />{" "}
          </div>
          <div className="textinput-Logcomplaint">
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
                    Pickup Address"
                  variant="standard"
                />
              )}
            />
          </div>
        </div>
        <div className="line-Logcomplaint">
          <div className="textinput-Logcomplaint">
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
                    Category"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="textinput-Logcomplaint">
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
                    Sub Category"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="textinput-Logcomplaint">
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
                    Defect"
                  variant="standard"
                />
              )}
            />
          </div>
        </div>
        <div className="line-Logcomplaint">
          <div className="textinput-Logcomplaint">
            <TextField
              id="standard-basic"
              label="Quantity"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, customerCompanyName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-Logcomplaint">
            <TextField
              id="standard-basic"
              label="Remark"
              variant="standard"
              onChange={(e) => {
                setValue({ ...value, ContactPersonName: e.target.value });
              }}
            />
          </div>
          <div className="textinput-Logcomplaint"></div>
        </div>

        <div className="buttons-Logcomplaint">
          <span className="buttons-Logcomplaint-span">
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
          <span className="buttons-Logcomplaint-span">
            <Button
              className="action-button"
              size="large"
              component="label"
              variant="contained"
              style={{ backgroundColor: "#32499F", color: "white" }}
            >
              Log Complaint
            </Button>
          </span>
        </div>
      </div>

      <div className="mainpage-callstatus">
        <div className="firstbox-Logcomplaint">
          <h4 className="first-text-Logcomplaint">View Pending Calls Status</h4>
        </div>
        <div className="line-Logcomplaint">
          <div className="textinput-Logcomplaint">
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
                  Category"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="textinput-Logcomplaint">
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
                  Sub Category"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="textinput-Logcomplaint">
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
                  Defect"
                  variant="standard"
                />
              )}
            />
          </div>
        </div>
        <div className="line-Logcomplaint">
          <div className="textinput-Logcomplaint">
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
                  Status"
                  variant="standard"
                />
              )}
            />
          </div>
          
        </div>

        <div className="buttons-Logcomplaint">
          <span className="buttons-Logcomplaint-span">
            <Button
              className="action-button"
              size="large"
              component="label"
              variant="contained"
              style={{ backgroundColor: "#32499F", color: "white" }}
            >
              Search
            </Button>
          </span>
          <span className="buttons-Logcomplaint-span">
            <Button
              className="action-button"
              size="large"
              component="label"
              variant="contained"
              style={{ backgroundColor: "#32499F", color: "white" }}
            >
              Reset
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logcomplaint;

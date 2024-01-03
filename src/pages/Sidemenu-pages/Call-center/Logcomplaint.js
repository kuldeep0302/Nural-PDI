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

  const [isDiv1Visible, setIsDiv1Visible] = useState(true);
  const [isDiv2Visible, setIsDiv2Visible] = useState(false);

  const toggleDiv1Visibility = () => {
    setIsDiv1Visible(!isDiv1Visible);
    setIsDiv2Visible(false);
  };

  const toggleDiv2Visibility = () => {
    setIsDiv2Visible(!isDiv2Visible);
    setIsDiv1Visible(false);
  };

  return (
    <div className="Logcomplaint-container">
      <div className="firstbox-Logcomplaint">
        <h4 className="first-text-Logcomplaint">Log Complaint</h4>
      </div>

      <div className="buttonsfirst-Logcomplaint">
        <div>
          <button
            className="button-Logcomplaint"
            onClick={toggleDiv1Visibility}
            style={{
              backgroundColor: isDiv1Visible ? "#33499F" : "#D2F0F4",
              color: "white",
            }}
          >
            Log Calls
          </button>
        </div>
        <div>
          <button
            className="button-Logcomplaint"
            onClick={toggleDiv2Visibility}
            style={{
              backgroundColor: isDiv2Visible ? "#33499F" : "#D2F0F4",
              color: "white",
            }}
          >
            Log Status
          </button>
        </div>
      </div>

      <div
        id="div1"
        style={{
          display: isDiv1Visible ? "block" : "none",
        }}
      >
        {" "}
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
      </div>

      <div id="div2" style={{ display: isDiv2Visible ? "block" : "none" }}>
        {" "}
        <div className="mainpagewithtable-callstatus">
          <div className="mainpage-callstatus">
            <div className="firstbox-Logcomplaint">
              <h4 className="first-text-Logcomplaint">
                View Pending Calls Status
              </h4>
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

          <div className="table-Logcalls">
            <table>
              <thead>
                <tr>
                  <th>Jobsheet Date</th>
                  <th>Jobsheet No.</th>
                  <th>Product Category</th>
                  <th>Model</th>
                  <th>Service center Alloc</th>
                  <th>Engineer Alloc</th>
                  <th>Status</th>
                  <th>Info</th>
                </tr>
                <tr>
                  <td colspan="8">&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09/11/2023</td>
                  <td>JS2140000060</td>
                  <td>xxxx</td>
                  <td>XYZ</td>
                  <td>FV140000060</td>
                  <td>89040000060</td>
                  <td>Pending Approval</td>
                  <td>
                    {" "}
                    <img
                      src="photos\info.png"
                      alt=""
                      width="15"
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr className="cs-Logcalls">
                  <td colspan="4"></td>
                </tr>
                <tr>
                  <td>09/11/2023</td>
                  <td>JS2140000060</td>
                  <td>xxxx</td>
                  <td>XYZ</td>
                  <td>FV140000060</td>
                  <td>89040000060</td>
                  <td>DC Generated</td>
                  <td>
                    {" "}
                    <img
                      src="photos\info.png"
                      alt=""
                      width="15"
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
                <tr className="cs-Logcalls">
                  <td colspan="4"></td>
                </tr>

                <tr>
                  <td>09/11/2023</td>
                  <td>JS2140000060</td>
                  <td>xxxx</td>
                  <td>XYZ</td>
                  <td>FV140000060</td>
                  <td>89040000060</td>
                  <td>Dispatched</td>
                  <td>
                    {" "}
                    <img
                      src="photos\info.png"
                      alt=""
                      width="15"
                      style={{ marginLeft: "5px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logcomplaint;

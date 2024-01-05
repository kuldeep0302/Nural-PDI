import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import Button from "@mui/material/Button";
import "./Jobsheet.css";

const calltype = [];
const Jobsheet = () => {
  const [value, setValue] = useState({});

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

  return (
    <>
      <div className="Jobsheet -container">
        <div className="fistline-Jobsheet ">
          <div className="namewithicone-Jobsheet ">
            <h4 className="">Jobsheets</h4>
          </div>
        </div>
      </div>

      <div>
        <div className="value-container-Jobsheet">
          <div className="firstvaluebox-Jobsheet">
            <p className="First-Jobsheet">Unallocated</p>
            <h3 className="Secound-Jobsheet">500</h3>
          </div>
          <div className="firstvaluebox-Jobsheet">
            <p className="First-Jobsheet">Allocated</p>
            <h3 className="Secound-Jobsheet">5</h3>
          </div>
          <div className="firstvaluebox-Jobsheet">
            <p className="First-Jobsheet">Closed</p>
            <h3 className="Secound-Jobsheet">32</h3>
          </div>
        </div>

        <div className="autofield-Jobsheet">
          <div className="autowithbutton">
            <div className="textinput-Jobsheet">
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
                    Job No."
                    variant="standard"
                  />
                )}
              />
            </div>
            <div className="buttons-Jobsheet">
              <span className="buttons-Jobsheet-span">
                <Button
                  className="action-button"
                  size="large"
                  component="label"
                  variant="contained"
                  style={{ backgroundColor: "#28A745", color: "white" }}
                >
                  Search
                </Button>
              </span>
            </div>
          </div>
          <div className="autowithbutton">
            <div className="textinput-Jobsheet">
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
                    Assign to Engineer"
                    variant="standard"
                  />
                )}
              />
            </div>
            <div className="buttons-Jobsheet">
              <span className="buttons-Jobsheet-span">
                <Button
                  className="action-button"
                  size="large"
                  component="label"
                  variant="contained"
                  style={{ backgroundColor: "#32499F", color: "white" }}
                >
                  Assign
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="table-Jobsheet">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Jobsheet Date</th>
              <th>Jobsheet Number</th>
              <th>Distributor Name</th>
              <th>Category</th>
              <th>Service center Alloc</th>
              <th>Engineer Alloc</th>
              <th>City</th>
              <th>Dispatch Status</th>
              <th>Status</th>
              <th>Info</th>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox"/>
                <img src="\photos\view.png" />
                <img src="\photos\print.png" />
                <img src="\photos\close.png" />
              </td>
              <td>07/05/2021</td>
              <td>xxxxx</td>
              <td>ATOM SPREADEDGE</td>
              <td>XYZ</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>xxxxx</td>
              <td>
                <img src="\photos\info.png" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Jobsheet;

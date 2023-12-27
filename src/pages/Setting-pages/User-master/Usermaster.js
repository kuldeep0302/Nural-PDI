import React, { useState } from "react";
import "./Usermaster.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import Radio from "@mui/material/Radio";

const calltype = [];

const Usermaster = () => {
  const [selectedValue, setSelectedValue] = useState("initialValue");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [value, setValue] = useState({
    customerCompanyName: "",
    contactPersonName: "",
    email: "",
    mobileNo: "",
  });

  const calltypeDefaultProps = {
    options: calltype,
    getOptionLabel: (option) => option.title,
  };

  const EntityType = [
    { title: "Call Center", Value: 1 },
    { title: "Engineer", Value: 2 },
    { title: "Service Center", Value: 3 },
  ];

  return (
    <>
      <div className="firstbox-Usermaster">
        <h4 className="first-text-Usermaster">User Master</h4>
      </div>
      <div className="Usermaster-container">
        <div className="createuu-Usermaster">
          <div>
            <h4>Create User Using:</h4>
          </div>

          <div className="rediobutton-Usermaster">
            <div className="first-rediobutton-Usermaster">
              <div>
                <Radio
                  checked={selectedValue === "excel"}
                  onChange={handleChange}
                  value="excel"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Excel" }}
                />
              </div>
              <div>
                <p>Excel</p>
              </div>
            </div>
            <div className="secound-rediobutton-Usermaster">
              <div>
                <Radio
                  checked={selectedValue === "ui"}
                  onChange={handleChange}
                  value="ui"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "UI" }}
                />
              </div>
              <div>
                <p>UI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-auti-form-Usermaster">
          <div className="line-Usermaster">
            <div className="textinput-Usermaste">
              <Autocomplete
                onChange={(e, val) => {
                  setValue({ ...value, role: val.title });
                  if (val.title === "Engineer") {
                    const addressusermaster =
                      document.getElementById("address-usermaster");
                    if (addressusermaster) {
                      addressusermaster.classList.add("hide");
                    }
                  } else {
                  }
                }}
                {...calltypeDefaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                options={EntityType}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Entity Type"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
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
                    Brand Mapping"
                    variant="standard"
                  />
                )}
              />
            </div>
            <div className="textinput-Usermaste"></div>
            <div className="textinput-Usermaste"></div>
          </div>

          <div className="line-Usermaster">
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, FirstName: e.target.value });
                }}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, LastName: e.target.value });
                }}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Mobile"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Mobile: e.target.value });
                }}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Email: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="line-Usermaster" id="address-usermaster">
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Landline"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Landline: e.target.value });
                }}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Address Line 1"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, AddressLine1: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Address Line 2"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, AddressLine2: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Usermaste">
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
                    State"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
          </div>

          <div className="line-Usermaster">
            <div className="textinput-Usermaste">
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
                    City"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Landmark"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Landmark: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Pincode"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Pincode: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Usermaste"></div>
          </div>

          <div className="line-Usermaster">
            <div className="textinput-Usermaste">
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
                    Login Name"
                    variant="standard"
                  />
                )}
              />
            </div>{" "}
            <div className="textinput-Usermaste">
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, Landmark: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Usermaste"></div>
            <div className="textinput-Usermaste"></div>
          </div>
        </div>

        <div className="button-Usermaster">
          <button className="create-Usermaster">Save</button>
          <button className="cancel-Usermaster">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Usermaster;

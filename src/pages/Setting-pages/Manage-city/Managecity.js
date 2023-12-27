import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import "./Managecity.css";

const calltype = [];

const callsource = [
  { title: "Afghanistan" },
  { title: "Albania" },
  { title: "Algeria" },
  { title: "Andorra" },
  { title: "Angola" },
  { title: "Antigua and Barbuda" },
  { title: "Argentina" },
  { title: "Armenia" },
  { title: "Australia" },
  { title: "Austria" },
  { title: "Azerbaijan" },
  { title: "Bahamas" },
  { title: "Bahrain" },
  { title: "Bangladesh" },
  { title: "Barbados" },
  { title: "Belarus" },
  { title: "Belgium" },
  { title: "Belize" },
  { title: "Benin" },
  { title: "Bhutan" },
  { title: "Bolivia" },
  { title: "Bosnia and Herzegovina" },
  { title: "Botswana" },
  { title: "Brazil" },
  { title: "Brunei" },
  { title: "Bulgaria" },
  { title: "Burkina Faso" },
  { title: "Burundi" },
  { title: "Cabo Verde" },
  { title: "Cambodia" },
  { title: "Cameroon" },
  { title: "Canada" },
  { title: "Central African Republic" },
  { title: "Chad" },
  { title: "Chile" },
  { title: "China" },
  { title: "Colombia" },
  { title: "Comoros" },
  { title: "Congo, Democratic Republic of the" },
  { title: "Congo, Republic of the" },
  { title: "Costa Rica" },
  { title: "Cote d'Ivoire" },
  { title: "Croatia" },
  { title: "Cuba" },
  { title: "Cyprus" },
  { title: "Czech Republic" },
  { title: "Denmark" },
  { title: "Djibouti" },
  { title: "Dominica" },
  { title: "Dominican Republic" },
  { title: "East Timor (Timor-Leste)" },
  { title: "Ecuador" },
  { title: "Egypt" },
  { title: "El Salvador" },
  { title: "Equatorial Guinea" },
  { title: "Eritrea" },
  { title: "Estonia" },
  { title: "Eswatini" },
  { title: "Ethiopia" },
  { title: "Fiji" },
  { title: "Finland" },
  { title: "France" },
  { title: "Gabon" },
  { title: "Gambia" },
  { title: "Georgia" },
  { title: "Germany" },
  { title: "Ghana" },
  { title: "Greece" },
  { title: "Grenada" },
  { title: "Guatemala" },
  { title: "Guinea" },
  { title: "Guinea-Bissau" },
  { title: "Guyana" },
  { title: "Haiti" },
  { title: "Honduras" },
  { title: "Hungary" },
  { title: "Iceland" },
  { title: "India" },
  { title: "Indonesia" },
  { title: "Iran" },
  { title: "Iraq" },
  { title: "Ireland" },
  { title: "Israel" },
  { title: "Italy" },
  { title: "Jamaica" },
  { title: "Japan" },
  { title: "Jordan" },
  { title: "Kazakhstan" },
  { title: "Kenya" },
  { title: "Kiribati" },
  { title: "Korea, North" },
  { title: "Korea, South" },
  { title: "Kosovo" },
  { title: "Kuwait" },
  { title: "Kyrgyzstan" },
  { title: "Laos" },
  { title: "Latvia" },
  { title: "Lebanon" },
  { title: "Lesotho" },
  { title: "Liberia" },
  { title: "Libya" },
  { title: "Liechtenstein" },
  { title: "Lithuania" },
  { title: "Luxembourg" },
  { title: "Madagascar" },
  { title: "Malawi" },
  { title: "Malaysia" },
  { title: "Maldives" },
  { title: "Mali" },
  { title: "Malta" },
  { title: "Marshall Islands" },
  { title: "Mauritania" },
  { title: "Mauritius" },
  { title: "Mexico" },
  { title: "Micronesia" },
  { title: "Moldova" },
  { title: "Monaco" },
  { title: "Mongolia" },
  { title: "Montenegro" },
  { title: "Morocco" },
  { title: "Mozambique" },
  { title: "Myanmar (Burma)" },
  { title: "Namibia" },
  { title: "Nauru" },
  { title: "Nepal" },
  { title: "Netherlands" },
  { title: "New Zealand" },
  { title: "Nicaragua" },
  { title: "Niger" },
  { title: "Nigeria" },
  { title: "North Macedonia (formerly Macedonia)" },
  { title: "Norway" },
  { title: "Oman" },
  { title: "Pakistan" },
  { title: "Palau" },
  { title: "Panama" },
  { title: "Papua New Guinea" },
  { title: "Paraguay" },
  { title: "Peru" },
  { title: "Philippines" },
  { title: "Poland" },
  { title: "Portugal" },
  { title: "Qatar" },
  { title: "Romania" },
  { title: "Russia" },
  { title: "Rwanda" },
  { title: "Saint Kitts and Nevis" },
  { title: "Saint Lucia" },
  { title: "Saint Vincent and the Grenadines" },
  { title: "Samoa" },
  { title: "San Marino" },
  { title: "Sao Tome and Principe" },
  { title: "Saudi Arabia" },
  { title: "Senegal" },
  { title: "Serbia" },
  { title: "Seychelles" },
  { title: "Sierra Leone" },
  { title: "Singapore" },
  { title: "Slovakia" },
  { title: "Slovenia" },
  { title: "Solomon Islands" },
  { title: "Somalia" },
  { title: "South Africa" },
  { title: "South Sudan" },
  { title: "Spain" },
  { title: "Sri Lanka" },
  { title: "Sudan" },
  { title: "Suriname" },
  { title: "Sweden" },
  { title: "Switzerland" },
  { title: "Syria" },
  { title: "Taiwan" },
  { title: "Tajikistan" },
  { title: "Tanzania" },
  { title: "Thailand" },
  { title: "Togo" },
  { title: "Tonga" },
  { title: "Trinidad and Tobago" },
  { title: "Tunisia" },
  { title: "Turkey" },
  { title: "Turkmenistan" },
  { title: "Tuvalu" },
  { title: "Uganda" },
  { title: "Ukraine" },
  { title: "United Arab Emirates" },
  { title: "United Kingdom" },
  { title: "United States" },
  { title: "Uruguay" },
  { title: "Uzbekistan" },
  { title: "Vanuatu" },
  { title: "Vatican City (Holy See)" },
  { title: "Venezuela" },
  { title: "Vietnam" },
  { title: "Yemen" },
  { title: "Zambia" },
  { title: "Zimbabwe" },
];

const Managecity = () => {
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
    <div className="Managecity-container">
      <div className="fistline-Managecity">
        <p className="name-Managecity">
          <span>
            <Link to="/Managecitymain">Manage City</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Managecity">
        <div className="name2-Managecity">
          <p>Manage City</p>
        </div>

        <div className="textinputmain-Managecity">
          <div className="line-Managecity">
            <div className="textinput-Managecity">
              <TextField
                id="standard-basic"
                label="City/District"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>

            <div className="textinput-Managecity">
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
                    label="Country Name"
                    variant="standard"
                  />
                )}
              />
            </div>

            <div className="textinput-Managecity">
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
          </div>

          <div className="line-Managecity">
            <div className="textinput-Managecity">
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

          <div className="button-Managecity">
            {" "}
            <button
              className="CANCEL-Managecity"
              type="button"
              onClick={() => {
                history("/Managecitymain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Managecity"
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

export default Managecity;

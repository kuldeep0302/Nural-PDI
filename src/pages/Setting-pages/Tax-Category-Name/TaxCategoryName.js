import React from "react";
import "./TaxCategoryName.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const TaxCategoryName = () => {
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
    <div className="TaxCategoryName-container">
      <div className="fistline-TaxCategoryName">
        <p className="name-TaxCategoryName">
          <span>
            <Link to="/TaxCategoryName">Manage Category Name</Link> &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-TaxCategoryName">
        <div className="namewithicone-TaxCategoryName">
          <p className="name2-TaxCategoryName">
            <p>Manage Category Name</p>{" "}
          </p>
        </div>
        <div className="textbox-main-TaxCategoryName">
          <div className="line-TaxCategoryName">
            <div className="textinput-TaxCategoryName">
              <TextField
                id="standard-basic"
                label="Tax Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="button-TaxCategoryName">
            <button className="CANCEL-TaxCategoryName" type="button">
              RESET
            </button>
            <button
              id="save-button"
              className="Save-TaxCategoryName"
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

export default TaxCategoryName;

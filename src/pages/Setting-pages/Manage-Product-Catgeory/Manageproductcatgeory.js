import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./Manageproductcatgeory.css";

const Manageproductcatgeory = () => {
  const history = useNavigate();

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
    <div className="Manageproductcatgeory-container">
      <div className="fistline-Manageproductcatgeory">
        <p className="name-Manageproductcatgeory">
          <span>
            <Link to="/Manageproductcatgeory">Manage Product Category</Link>{" "}
            &gt;
          </span>
          <span>
            {" "}
            <Link to="#">Add</Link>{" "}
          </span>
        </p>
      </div>

      <div className="autocompleteform-Manageproductcatgeory">
        <div className="name2-Manageproductcatgeory">
          <p>Manage Product Category</p>{" "}
        </div>
        <div className="textbox-main-Manageproductcatgeory">
          <div className="line-Manageproductcatgeory">
            <div className="textinput-Manageproductcatgeory">
              <TextField
                id="standard-basic"
                label="Product Category Name"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductcatgeory">
              <TextField
                id="standard-basic"
                label="Product Category Code"
                variant="standard"
                onChange={(e, val) => {
                  setValue({ ...value, workflowName: e.target.value });
                }}
              />
            </div>
            <div className="textinput-Manageproductcatgeory"></div>
          </div>

          <div className="button-MManageproductcatgeory">
            <button
              className="CANCEL-Manageproductcatgeory"
              type="button"
              onClick={() => {
                history("/Manageproductcategorymain");
              }}
            >
              CANCEL
            </button>
            <button
              id="save-button"
              className="Save-Manageproductcatgeory"
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

export default Manageproductcatgeory;

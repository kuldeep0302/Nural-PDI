import React, { useState } from "react";
import "./Serialvendorwarranty.css";

const Serialvendorwarranty = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      // Implement your file upload logic here, e.g., use a file upload API
      console.log("Uploading file:", selectedFile.name);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="container-Serialvendorwarranty">
      <div className="upload-excel-Serialvendorwarranty">
        <p>Upload Excel:</p>
      </div>

      <div className="upload-text-Serialvendorwarranty">
        <input
          className="input-Serialvendorwarranty"
          type="file"
          onChange={handleFileChange}
        />
        <button className="upload-Serialvendorwarranty" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Serialvendorwarranty;

import React, { useState } from "react";
import "./Managepartmaster.css";

const Managepartmaster = () => {
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
    <div className="container-Managepartmaster">
      <div className="upload-excel-Managepartmaster">
        <p>Upload Excel:</p>
      </div>

      <div className="upload-text-Managepartmaster">
        <input
          className="input-Managepartmaster"
          type="file"
          onChange={handleFileChange}
        />
        <button className="upload-Managepartmaster" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Managepartmaster;

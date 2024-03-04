// App.js

import React from "react";
import "./App.css";

function App() {
  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      console.log("PDF file uploaded:", file);
      // Add your file upload logic here
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to PDF Upload Page</h1>
        <p>Easily upload your PDF files here</p>
      </header>
      <div className="Upload-section">
        <form className="Upload-form">
          <label htmlFor="file-upload" className="Custom-upload-label">
            <span>Choose PDF File</span>
            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
          <button type="button" className="Upload-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

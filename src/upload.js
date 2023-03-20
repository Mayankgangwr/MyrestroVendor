import React, { useState } from "react";
import axios from "axios";
function FileUploadSingle() {
  const [myFile, setMyFile] = useState(null);
  const [msg, setMsg] = useState("");
  function selectFile() {
    document.getElementById("mfile").click();
  }
  function setFile(e) {
    setMyFile(e.target.files[0]);
    uploadFile();
  }
  function uploadFile() {
    const url = "https://sattasafari.com/restro/img/create.php";
    const data = new FormData();
    data.append("file", myFile);
    axios.post(url, data).then((Response) => setMsg(Response.data));
  }
  return (
    <div>
      <input type="file" name="mfile" id="mfile" onChange={setFile} />
      <button
        style={{
          background: "#150",
          color: "#fff",
          padding: "10px",
          fontSize: "18px",
          cursor: "pointer",
          border: "none",
        }}
        onClick={selectFile}
      >
        Select File
      </button>
      <p>{msg}</p>
    </div>
  );
}

export default FileUploadSingle;

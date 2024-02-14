import  { useState, useContext } from 'react';
import axios from 'axios'; // Import Axios
import { UserContext } from "../../context/UserContext";

function FileUpload() {
  const [file, setFile] = useState(null);
  const server = import.meta.env.VITE_APP_SERVER;
  const { user } = useContext(UserContext);
  const id = user.id;

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append("id", id);

    try {
      // Using Axios for the file upload
      const response = await axios.post(`${server}/drive/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('File uploaded successfully: ' + JSON.stringify(response.data));
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.response?.statusText || error.message);
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;

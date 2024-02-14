import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import "./createAssistant.css"; // Assuming you have a CSS file for basic animations

const CreateAssistantForm = () => {
  const API_URL = import.meta.env.VITE_APP_SERVER;

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);
  const id = user.id;
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2; // Including the submit step
  const [assistantData, setAssistantData] = useState({
    name: "",

    instructions: "",

    image_url: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssistantData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
    console.log(selectedFiles); // Log to check
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    Object.keys(assistantData).forEach((key) => {
      if (key === "tools" && assistantData[key].length) {
        assistantData[key].forEach((value) => formData.append(key, value));
      } else {
        formData.append(key, assistantData[key]);
      }
    });

    Array.from(selectedFiles).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(`${API_URL}/buddy/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Axios will automatically set the Content-Type to 'multipart/form-data' with the correct boundary
        },
      });

      console.log("Server response:", response.data);
      navigate("/");
      // Handle the response, such as showing a success message or redirecting the user
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle errors, such as showing an error message to the user
    }
  };

  return (
    <div className="login-container">
      <div className="login-leftContainer">
        <div className="login-leftImage"></div>
        <div className="blur"></div>
      </div>
      <div className="login-rightForm">
        <form className="loginForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Let's Personalize your Ai assistant </h2>

          {currentStep === 1 && (
            <div className="form-step">
              <label>Assistant Name</label>
              <input
              
                id="username"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={assistantData.name}
                required
              />
            </div>
          )}
     
          {currentStep === 2 && (
            <div className="form-step">
              <label>Instructions</label>
              <textarea
               required
              id="username"
                name="instructions"
                onChange={handleInputChange}
                value={assistantData.instructions}
              ></textarea>
            </div>
          )}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button className="loginButton" type="button" onClick={handleBack}>
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button className="loginButton" type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {currentStep === totalSteps && (
              <button className="loginButton" type="submit">Submit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssistantForm;

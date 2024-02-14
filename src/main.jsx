window.global = window;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextWrapper } from "./context/UserContext.jsx";
import { UserDataContextWrapper } from "./context/UserDataContext.jsx";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextWrapper>
        <UserDataContextWrapper>
          <CustomProvider theme="dark">
            <App />
          </CustomProvider>
        </UserDataContextWrapper>
      </UserContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

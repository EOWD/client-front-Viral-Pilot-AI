import "./App.css";
import { Route, Routes } from "react-router-dom";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Profile from "./components/user/Profile";
import IsPrivate from "./components/controllers/Private";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import Voice from "./components/Voice";
import Drive from "./components/drive/Drive/Drive";
import DriveImages from "./components/drive/Images/Images";
import Calendar from "./components/drive/Calendar/Calendar";
import Explore from "./components/drive/Explore/Explore";

import CreateAssistantForm from "./components/assistant/create-assistant/createAssistant";

import Diary from "./components/drive/Diary/Diary";


import Call from './components/assistant/callAssistant'
import LoggedIn from "./components/controllers/LoggedIn";
import Chat from "./components/chat/Chat";
import { SkeletonTheme } from "react-loading-skeleton";


function App() {
  return (
    <div>

      <SkeletonTheme baseColor="rgb(14, 14, 14)" highlightColor="#292d33">
      <Routes>
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <LoggedIn>
              <Layout>
                <Login />
              </Layout>
            </LoggedIn>
          }
        />
             <Route
          path="/createassistant"
          element={
            <IsPrivate>
             
                
                <CreateAssistantForm />
               
              
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Layout>
                <Profile />
                
                <Call />
              </Layout>
            </IsPrivate>
          }
        />
        <Route
          path="/voice"
          element={
            <IsPrivate>
              <Layout>
                <Voice />
                <Call />
              </Layout>
            </IsPrivate>
          }
        />
        <Route
          path="/drive"
          element={
            <IsPrivate>
              <Layout>
                <Drive />
                <Call />
              </Layout>
            </IsPrivate>
          }
        />
        <Route
          path="/"
          element={
            <IsPrivate>
              <Layout>
                <Voice />
              </Layout>
            </IsPrivate>
          } />
        <Route
          path="/tools"
          element={
            <IsPrivate>
              <Layout>
                <Home />
                <Call />
              </Layout>
            </IsPrivate>
          } />
        <Route
          path="/drive/images"
          element={
            <IsPrivate>
              <Layout>
                <DriveImages />
                <Call />
              </Layout>
            </IsPrivate>
          } />
        <Route
          path="/drive/calendar"
          element={
            <IsPrivate>
              <Layout>
                <Calendar />
                <Call />
              </Layout>
            </IsPrivate>
          } />
        <Route
          path="/drive/diary"
          element={
            <IsPrivate>
              <Layout>
                <Diary />
                <Call />
              </Layout>
            </IsPrivate>
          } />
        <Route
          path="/explore"
          element={
            <IsPrivate>
              <Layout>
                <Explore />
                <Call />
              </Layout>
            </IsPrivate>
          } />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;

import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const API_URL = import.meta.env.VITE_APP_SERVER;
const UserDataContext = createContext();

const UserDataContextWrapper = ({ children }) => {
  const { user } = useContext(UserContext);
  const [entries, setEntries] = useState([]);
  const [images, setImages] = useState([]);
  const [notes, setNotes] = useState([]);
  const [diaries, setDiaries] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const [chatLog, setLog] = useState([]);
  const [selectedImage, setSelectedImage] = useState([])

  // Define a function to fetch and update the context data
  const refreshData = async () => {
    if (user && user.id) {
      try {
        const entriesResponse = await axios.post(`${API_URL}/drive/user/entry`, { id: user.id });
        setEntries(entriesResponse.data.data);
        const fetchedEntries = entriesResponse.data.data;
        setNotes(fetchedEntries.filter(entry => entry.entryKind === 'note'));
        setDiaries(fetchedEntries.filter(entry => entry.entryKind === 'diary'));
        setCalendars(fetchedEntries.filter(entry => entry.entryKind === 'calendar'));

        const imagesResponse = await axios.post(`${API_URL}/drive/user/images`, { id: user.id });
        setImages(imagesResponse.data.data);

        const chatResponse = await axios.post(`${API_URL}/drive/chatlog`, { id: user.id });
        setLog(chatResponse.data.data);

        console.log("User data refreshed");
      } catch (error) {
        console.error("Error refreshing user data:", error);
      }
    }
  };

  // Call refreshData initially and whenever `user` changes
  useEffect(() => {
    refreshData();
  }, [user]);

  return (
    <UserDataContext.Provider value={{ entries, notes, diaries, calendars, images, chatLog, refreshData, selectedImage, setSelectedImage }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataContextWrapper };

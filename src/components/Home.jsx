import React from "react";
import VoiceNavigator from "./frontEndVoiceCommand/VoiceNav";
import TTS from "./drive/TTS.form";
function Home() {
  return (
    <div>
      OUR KICK ASS APP
      <VoiceNavigator />
      <TTS />
    </div>
  );
}

export default Home;

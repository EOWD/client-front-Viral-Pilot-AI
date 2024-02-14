import  { useState } from 'react';
import axios from 'axios';

function TTS() {
    const server = import.meta.env.VITE_APP_SERVER
  const [text, setText] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/AiTools/TTS`, {
       
          text: text,
          id: 'userId' // Assuming you have a way to get the userId
        
      });
      const audioBase64 = response.data.audio;
      setAudioSrc(`data:audio/mp3;base64,${audioBase64}`);
    } catch (error) {
      console.error('Error fetching audio:', error);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioSrc;
    link.download = 'audio.mp3'; // Provide a filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text" 
        />
        <button type="submit">Convert to Speech</button>
      </form>
      {audioSrc && (
        <>
          <audio controls src={audioSrc}></audio>
          <button onClick={handleDownload}>Download MP3</button>
        </>
      )}
    </div>
  );
}

export default TTS;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import annyang from 'annyang';
import { UserContext } from '../../context/UserContext';

function AudioRecorder() {
  const { user } = useContext(UserContext);
  const id = user.id;
  const REACT_APP_SERVER = 'http://localhost:5069';
  const navigate = useNavigate();
  const [audioBlob, setAudioBlob] = useState(null);
  const [recording, setRecording] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const initAudioContext = async () => {
      try {
        const context = new AudioContext();
        await context.audioWorklet.addModule('../controllers/Silence.jsx'); // Adjust the path to your silence.jsx
        setAudioContext(context);
      } catch (error) {
        console.error('Error loading audio worklet:', error);
      }
    };
    initAudioContext();
  }, []);

  useEffect(() => {
    if (annyang) {
      const commands = {
        "Pilot": startRecording,
      };
      annyang.addCommands(commands);
      annyang.start();
    } else {
      console.error("Speech Recognition is not supported");
    }

    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setRecording(true);

      if (audioContext) {
        const silenceDetectorNode = new AudioWorkletNode(audioContext, 'silence-detector-processor');
        silenceDetectorNode.port.onmessage = (event) => {
          if (event.data === 'silent') {
            mediaRecorder.stop();
            setRecording(false);
          }
        };
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(silenceDetectorNode).connect(audioContext.destination);
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  useEffect(() => {
    const sendAudio = async () => {
      if (audioBlob) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append("myFile", audioBlob, "recording.mp3");
        try {
          const response = await axios.post(
            `${REACT_APP_SERVER}/drive/assistant`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setSendStatus("Sent successfully");
          console.log(response.data);
        } catch (error) {
          setSendStatus("Error sending audio");
          console.error("Error uploading file:", error);
        }
      }
    };

    sendAudio();
  }, [audioBlob]);

  return (
    <div>
      {recording ? (
        <p>Recording...</p>
      ) : (
        <p>Not Recording. Say "Pilot" to start.</p>
      )}
      {sendStatus && <p>{sendStatus}</p>}
    </div>
  );
}

export default AudioRecorder;

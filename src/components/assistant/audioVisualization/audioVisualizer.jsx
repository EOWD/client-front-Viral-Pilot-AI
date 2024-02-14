// Circle.js
import React from 'react';
import './audio.css';

const Circle = ({ isSpeaking, isThinking, isListening,idle }) => {
  return (
    <div className="circle-container">
      <div className={`circle ${idle ? 'idle' : ''} ${isSpeaking ? 'speak' : ''} ${isThinking ? 'think' : ''} ${isListening ? 'listen' : ''}`}>
        {isThinking && <span className="thinking-text">...</span>}
      </div>
      {/* <p className="text">The only way out is through</p> */}

    </div>
  );
};

export default Circle;

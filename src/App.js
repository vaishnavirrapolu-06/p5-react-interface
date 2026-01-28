import React, { useState } from 'react';

function StatusDisplay(props) {
  return (
    <div style={{ 
      padding: "20px", 
      border: "3px dashed pink", 
      marginTop: "20px",
      borderRadius: "15px",
      backgroundColor: "#fff"
    }}>
      <h2 style={{ color: "deeppink" }}>
        Editor Status: {props.currentStatus}
      </h2>
    </div>
  );
}

function App() {

  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px", 
      backgroundColor: "#fff0f5", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#ff1493" }}>🌸 Vaishnavi's p5.js React Editor 🌸</h1>
      
      <p>Welcome to your GSoC 2026 Practice App!</p>

      {}
      <button 
        onClick={handleButtonClick} 
        style={{ 
          padding: "15px 30px", 
          fontSize: "18px", 
          cursor: "pointer",
          backgroundColor: isRunning ? "#ff69b4" : "#ffb6c1",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        {isRunning ? "🛑 STOP SKETCH" : "▶️ PLAY SKETCH"}
      </button>

      {}
      <StatusDisplay currentStatus={isRunning ? "The Sketch is LIVE!" : "The Sketch is IDLE."} />
      
      <div style={{ 
        marginTop: "6px", 
        paddingTop: "20px",  
        color: "#707070", 
        fontSize: "15px"
        }}>
        <p><strong>Interface Development for Processing Foundation</strong></p>
        <p style={{ fontSize: "13px", opacity: "0.7" }}>React js </p>
      </div>
    </div>
  );
}

export default App;
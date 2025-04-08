import React, { useState } from "react";
import "../App.css";

const PromptInput = ({ onGenerate }) => {

    const [prompt, setPrompt] = useState("");


  const handleGenerate = () => {
    if (prompt.trim() !== "") {
      onGenerate(prompt);
    }
  };

  return (
    <div className="AppSection">
      <h2>Enter Prompt</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your component..."
        className="textarea"
      />
      <button className="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );

}



export default PromptInput;

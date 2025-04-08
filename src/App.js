import React, { useState } from "react";
import PromptInput from "./UI/promptArea";
import LivePreview from "./UI/LivePreview";
import { generateHTML } from "./api";
import "./App.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");

  const handleGenerate = async (prompt) => {
    setLoading(true); // Show loading state
    const generatedHTML = await generateHTML(prompt);
    setHtmlCode(generatedHTML);
    setLoading(false);
  };

  return (
    <>
      <div className="App">
        <PromptInput onGenerate={handleGenerate} />
        <div className="AppSection">
          <h2>Generated Code</h2>
          <pre className="codePreview">{htmlCode}</pre>
        </div>
        <LivePreview htmlCode={htmlCode} />
      </div>
    </>
  );
}

export default App;

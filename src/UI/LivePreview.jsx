import React from "react";
import "../App.css";

const LivePreview = ({ htmlCode }) => {


    return (
        <div className="AppSection">
        <h2>Live Preview</h2>
        <iframe
          className="iframe"
          title="AI Preview"
          sandbox="allow-scripts"
          srcDoc={htmlCode}
        />
      </div>
    )
}

export default LivePreview;

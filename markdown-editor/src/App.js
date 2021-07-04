import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Editor");

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

export default App;

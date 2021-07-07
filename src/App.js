import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('# Markdown Preview');
  return (
    <section className="markdown">
      <textarea
        className="input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

    </section>
  );
}

export default App;

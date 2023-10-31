import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.split(/\s+/).filter((word) => word !== '');
    return words.length;
  };

  return (
    <div className="word-counter-container">
      <h1>Responsive Word Counter</h1>
      <textarea
        rows="5"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter; // Export the WordCounter component as default
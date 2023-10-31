import React from 'react';
import './App.css';
import WordCounter from './WordCounter'; // Make sure the import path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordCounter />
      </header>
    </div>
  );
}

export default App;
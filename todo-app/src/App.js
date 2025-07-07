import './App.css';
import ToDoList from './ToDoList';
import React, { useState } from 'react';
import WelcomePage from './WelcomePage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomePage onContinue={() => setShowWelcome(false)} />
      ) : (
        <ToDoList />
      )}
    </div>
  );
}

export default App;

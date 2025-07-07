import React from 'react';
import './WelcomePage.css';

function WelcomePage({ onContinue }) {
  return (
    <div className="welcome-wallpaper">
      <div className="welcome-content">
        <h1>Welcome to Your To-Do List</h1>
        <p>Organize your day, boost your productivity, and enjoy a beautiful experience.</p>
        <button className="welcome-btn" onClick={onContinue}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomePage; 
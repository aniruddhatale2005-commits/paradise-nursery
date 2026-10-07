import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your online destination for beautiful
          and healthy houseplants.
        </p>

        <p>
          Explore our collection of plants and bring a touch of nature into
          your home.
        </p>

        <button
          className="get-started-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

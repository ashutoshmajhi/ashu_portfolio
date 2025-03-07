import React from "react";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hey, I'm Ashutosh 👋</h1>
      <p className="text-lg text-gray-400 mt-4">
        MTech CSE @ IIIT Delhi | ML Enthusiast
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-2 list-disc list-inside text-gray-300">
          <li>🔹 Speaker-Source Separation</li>
          <li>🔹 Visual Voice Activity Detection (VVAD)</li>
          <li>🔹 Bayesian Network for Fare Classification</li>
        </ul>
      </div>
    </div>
  );
};

export default App;

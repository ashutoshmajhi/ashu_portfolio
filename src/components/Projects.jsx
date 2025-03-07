import React from "react";

const Projects = () => {
  return (
    <div className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold">🔹 Speaker-Source Separation</h3>
          <p className="text-gray-400">ML model for separating speech from noisy environments.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold">🔹 Visual Voice Activity Detection (VVAD)</h3>
          <p className="text-gray-400">Classifying speech activity using lip and face images.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold">🔹 Bayesian Network for Fare Classification</h3>
          <p className="text-gray-400">Predicting fare categories using probabilistic models.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

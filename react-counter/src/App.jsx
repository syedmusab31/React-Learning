import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          React Counter
        </h1>
        <div className="flex justify-center mb-8">
          <p className="text-2xl text-gray-700 font-medium">
            Count: <span className="text-indigo-600 font-bold">{count}</span>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={increment}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
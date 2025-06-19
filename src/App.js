import React from 'react';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 text-white bg-[#121212]">
        <h1 className="text-2xl">Welcome to LeetCode Clone</h1>
      </div>
    </div>
  );
}

export default App;

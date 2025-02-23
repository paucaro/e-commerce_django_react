import React from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 p-4">
        <h1 className="text-2xl">Welcome to My Store!</h1>
      </div>
    </div>
  );
}

export default App;
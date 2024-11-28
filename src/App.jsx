import React, { useState, useEffect } from 'react';
import Template from './Template';
import Nav from './Nav';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-white text-5xl">
          Editor
        </div>
      ) : (
        <>
          <Nav />
          <Template />
        </>
      )}
    </>
  );
}

export default App;

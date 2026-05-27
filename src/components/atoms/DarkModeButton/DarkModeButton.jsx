import React, { useState, useEffect } from 'react';

function DarkModeToggleButton({ initialMode = 'light' }) {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleMode}
      className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none "
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? (
        <img src="/images/icons/Property 1=lghit.png" alt="Moon Icon"  />
      ) : (
        <img src="/images/icons/btn-icon.png" alt="Sun Icon"  />
      )}
    </button>
  );
}

export default DarkModeToggleButton;
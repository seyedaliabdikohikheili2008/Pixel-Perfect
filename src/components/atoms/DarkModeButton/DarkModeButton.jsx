import React, { useState, useEffect } from 'react';
import sun from "../../../assets/images/icons/dark-mode/btn-icon.png"
import moon from "../../../assets/images//icons/dark-mode/Property 1=lghit.png"
const DarkModeButton=({ initialMode = 'light' })=> {
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
        <img src={moon} alt="Moon Icon"  />
      ) : (
        <img src={sun} alt="Sun Icon"  />
      )}
    </button>
  );
}

export default DarkModeButton;
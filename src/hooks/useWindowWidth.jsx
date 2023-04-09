import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleCheckWidth() {
      setWindowWidth({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleCheckWidth);
    return () => window.removeEventListener('resize', handleCheckWidth);
  }, []);

  return windowWidth;
}

export default useWindowWidth;

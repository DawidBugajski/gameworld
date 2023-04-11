import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth <= 640,
  });

  useEffect(() => {
    function handleCheckWidth() {
      setWindowWidth({
        width: window.innerWidth,
        isMobile: window.innerWidth <= 640,
      });
    }

    window.addEventListener('resize', handleCheckWidth);
    return () => window.removeEventListener('resize', handleCheckWidth);
  }, []);

  return windowWidth;
}

export default useWindowWidth;

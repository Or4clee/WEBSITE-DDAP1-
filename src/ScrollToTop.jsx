// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas
  }, [location]);

  return null; // Tidak merender apapun, hanya untuk menangani scroll
}

export default ScrollToTop;

import React, { useState, useEffect, useRef } from 'react';
import './LazyLoad.css'; // Import CSS file for styling

const LazyLoad = ({ children }) => {
  const [intersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={intersecting ? 'lazy-load visible' : 'lazy-load'}>
      {children}
    </div>
  );
};

export default LazyLoad;

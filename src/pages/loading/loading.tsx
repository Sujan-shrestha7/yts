import React, { useEffect, useState } from 'react';
import Loading from './loading.gif';
import '../Home.css';

interface LoadingProps {
  show: boolean; // Define the type for the show prop
}

const LoadingComponent: React.FC<LoadingProps> = ({ show }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true); // Specify the type of isVisible state

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false); // Hide the loading screen after 2 seconds
      }, 2000);
      
      // Cleanup the timer when component unmounts
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]); 

  return (
    <div className="loading-screen">
      {isVisible && <img className="loading-img" src={Loading} alt="loading" />}
    </div>
  );
};

export default LoadingComponent;

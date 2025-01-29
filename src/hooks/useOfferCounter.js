import { useState, useEffect } from 'react';

export const useOfferCounter = (initialCount = 47) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const getRandomDelay = () => {
      return Math.floor(Math.random() * (60000 - 30000) + 30000);
    };

    const getRandomDecrement = () => {
      return Math.floor(Math.random() * 3) + 1;
    };

    const interval = setInterval(() => {
      setCount((currentCount) => {
        const newCount = currentCount - getRandomDecrement();
        return newCount > 0 ? newCount : 0;
      });
    }, getRandomDelay());

    return () => clearInterval(interval);
  }, []);

  return count;
};
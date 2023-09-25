import { useEffect, useState } from 'react';

export const useNavPosition = (stickyRef?: React.RefObject<HTMLSpanElement>) => {
  const [navPosition, setNavPosition] = useState('sticky');

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef) {
        const sticky = stickyRef.current;

        if (sticky && window?.scrollY >= sticky?.offsetTop) {
          setNavPosition('relative');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { capture: true });

    return () => window.removeEventListener('scroll', handleScroll, { capture: true });
  }, []);

  return { navPosition };
};

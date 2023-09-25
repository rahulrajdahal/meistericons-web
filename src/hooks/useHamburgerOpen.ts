import { useState } from 'react';

export const useHamburgerOpen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen };
};

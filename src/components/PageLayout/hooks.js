import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hiddenMenuRoutes } from './config';

export const useHideMenu = () => {
  const { pathname } = useLocation();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (hiddenMenuRoutes.includes(pathname)) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [pathname]);

  return isHidden;
};

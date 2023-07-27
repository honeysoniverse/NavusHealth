import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveMenuProperties = (path) => {
  const { pathname } = useLocation();
  const [state, setState] = useState({
    activeGroup: undefined,
    activeItem: undefined,
    isGroupActive: false,
    isItemActive: false,
  });

  useEffect(() => {
    const splittedPathname = pathname.split('/');
    const activeGroup = `/${splittedPathname[1]}`;

    setState({
      isGroupActive: path === activeGroup,
      isItemActive: path === pathname,
    });
  }, [pathname, path]);

  return state;
};

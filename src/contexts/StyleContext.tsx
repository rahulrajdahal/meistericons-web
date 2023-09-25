import * as React from 'react';

interface INavProps {
  hamburgerOpen?: boolean;
  searchOffset?: boolean;
}

const defaultValue: {
  navStyles: string;
  setNavStyles: React.Dispatch<React.SetStateAction<string>>;
  searchBarStyles: string;
  setSearchBarStyles: React.Dispatch<React.SetStateAction<string>>;
  navProps: INavProps;
  setNavProps: React.Dispatch<React.SetStateAction<INavProps>>;
} = {
  navStyles: 'sticky',
  setNavStyles: () => 'sticky',
  searchBarStyles: '',
  setSearchBarStyles: () => '',
  navProps: {},
  setNavProps: () => ({}),
};

export const StyleContext = React.createContext(defaultValue);

export default function StyleContextProvider({ children }: { children: React.ReactNode }) {
  const [navProps, setNavProps] = React.useState({});
  const [navStyles, setNavStyles] = React.useState('');
  const [searchBarStyles, setSearchBarStyles] = React.useState('');

  const value = React.useMemo(() => {
    return { navStyles, setNavStyles, setSearchBarStyles, searchBarStyles, navProps, setNavProps };
  }, [navStyles, setNavStyles, setSearchBarStyles, searchBarStyles, navProps, setNavProps]);

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
}

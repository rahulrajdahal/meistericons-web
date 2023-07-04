import { useFetchIcons } from '@/hooks/useFetchIcons';
import { useSearch } from '@/hooks/useSearch';
import { Tags, IconNode } from '@/utils/helpers';
import * as React from 'react';

const defaultValue: { icons: IconNode[]; query: string; setQuery: React.Dispatch<React.SetStateAction<string>> } = {
  icons: [],
  query: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuery: () => {},
};

export const IconsContext = React.createContext(defaultValue);

export default function IconsContextProvider({ children }: { children: React.ReactNode }) {
  const { meisterIcons } = useFetchIcons();
  const [query, setQuery] = React.useState('');

  const icons = React.useMemo(() => {
    if (meisterIcons) {
      return Object.entries(meisterIcons.iconNodes);
    }
    return [];
  }, [meisterIcons]);

  const tags = React.useMemo(() => {
    if (meisterIcons) {
      return meisterIcons.tags;
    }
    return [];
  }, [meisterIcons]);

  const filteredIcons = useSearch(icons, tags as Tags, query);

  const value = React.useMemo(() => {
    if (filteredIcons) {
      return { icons: filteredIcons, query, setQuery };
    }
    return { icons: icons, query, setQuery };
  }, [filteredIcons, icons, query, setQuery]);

  return <IconsContext.Provider value={value}>{children}</IconsContext.Provider>;
}

import { useCategory } from '@/hooks';
import { useFetchIcons } from '@/hooks/useFetchIcons';
import { IconNode, Categories } from '@/utils/helpers';
import * as React from 'react';

const defaultValue: { icons: IconNode[]; category: string; setCategory: React.Dispatch<React.SetStateAction<string>> } =
  {
    icons: [],
    category: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCategory: () => {},
  };

export const CategoryContext = React.createContext(defaultValue);

export default function CategoryContextProvider({ children }: { children: React.ReactNode }) {
  const { meisterIcons } = useFetchIcons();
  const [category, setCategory] = React.useState('All Icons');

  const icons = React.useMemo(() => {
    if (meisterIcons) {
      return Object.entries(meisterIcons.iconNodes);
    }
    return [];
  }, [meisterIcons]);

  const categories = React.useMemo(() => {
    if (meisterIcons) {
      return meisterIcons.categories;
    }
    return [];
  }, [meisterIcons]);

  const filteredIcons = useCategory(icons, categories as Categories, category);

  const value = React.useMemo(() => {
    if (filteredIcons) {
      return { icons: filteredIcons, category, setCategory };
    }
    return { icons: icons, category, setCategory };
  }, [filteredIcons, icons, category, setCategory]);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

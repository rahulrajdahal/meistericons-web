import * as React from 'react';
import { IconType, Category } from '@/utils/helpers';

const defaultValue: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  iconType: IconType;
  setIconType: React.Dispatch<React.SetStateAction<IconType>>;
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
} = {
  query: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuery: () => {},
  iconType: 'all',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIconType: () => {},
  category: 'all icons',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCategory: () => {},
};

export const IconContext = React.createContext(defaultValue);

export default function IconContextProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('all icons');
  const [iconType, setIconType] = React.useState<IconType>('all');

  const value = React.useMemo(
    () => ({ query, setQuery, iconType, setIconType, category, setCategory }),
    [query, setQuery, iconType, setIconType, category, setCategory],
  );

  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
}

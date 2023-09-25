import { filterIcons, Tags } from '@/utils/helpers';
import { useFetchIcons } from './useFetchIcons';
import * as React from 'react';

export const useSearch = (query: string) => {
  const { meisterIcons } = useFetchIcons();

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

  const searchString = query.toLowerCase();
  const filteredIcons = filterIcons(icons, tags as Tags, searchString);

  const searchIcons = React.useMemo(() => {
    if (!query) return icons;

    return filteredIcons;
  }, [query, icons, tags, filteredIcons]);

  return { icons: searchIcons };
};

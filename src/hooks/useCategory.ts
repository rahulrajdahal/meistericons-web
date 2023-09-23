import * as React from 'react';
import { Categories, Icon, filterCategories } from '@/utils/helpers';
import { useFetchIcons } from './useFetchIcons';

export const useCategory = (category: string) => {
  const { meisterIcons } = useFetchIcons();

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

  const searchString = category.toLowerCase();

  const categoryIcons = React.useMemo(() => {
    if (searchString === 'all icons') return icons;
    return filterCategories(icons, categories as Categories, searchString);
  }, [icons, categories, searchString]);

  return { icons: categoryIcons };
};

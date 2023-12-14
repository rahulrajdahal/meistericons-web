import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from './useSearch';
import { useCategory } from './useCategory';
import { useIconType } from './useIconType';
import { Icon, IconType, filterIconTypes } from '@/utils/helpers';

export default function useIcons() {
  const [searchParams] = useSearchParams();

  const { icons: searchIcons } = useSearch(searchParams.get('q') ?? '');
  const { icons: categoryIcons } = useCategory(searchParams.get('category')?.replaceAll('-', ' ') ?? 'all icons');
  const { icons: iconTypeIcons } = useIconType((searchParams.get('type') as IconType) ?? 'all');

  const icons = React.useMemo(() => {
    if (searchParams.get('q')) {
      if (searchParams.get('type') !== 'all') {
        return filterIconTypes(searchIcons as Icon[], searchParams.get('type') ?? 'all');
      }
      return searchIcons;
    }

    if (searchParams.get('category') !== 'all icons') {
      if (searchParams.get('type') !== 'all') {
        return filterIconTypes(categoryIcons as Icon[], searchParams.get('type') ?? 'all');
      }
      return categoryIcons;
    }

    if (searchParams.get('q')) {
      return searchIcons;
    }

    if (searchParams.get('category') !== 'all icons') {
      return categoryIcons;
    }

    if (searchParams.get('type') !== 'all') {
      return iconTypeIcons;
    }

    return searchIcons;
  }, [searchParams, searchIcons]);

  return { icons };
}

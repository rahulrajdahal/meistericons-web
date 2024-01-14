import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from './useSearch';
import { useCategory } from './useCategory';
import { useIconType } from './useIconType';
import { Icon, IconType, filterIconTypes } from '@/utils/helpers';
import { useInView } from 'react-intersection-observer';

export default function useIcons() {
  const [searchParams] = useSearchParams();
  const { ref, inView } = useInView();

  const [limit, setLimit] = React.useState(30);

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

  React.useEffect(() => {
    if (inView) {
      if (icons && limit <= icons?.length) {
        setLimit((prev) => prev + 30);
      } else {
        setLimit(30);
      }
    }
  }, [icons, inView]);

  const moreIcons = React.useMemo(() => {
    if (icons) {
      return icons?.slice(0, limit);
    }
    return [];
  }, [icons]);

  return { icons: moreIcons, ref };
}

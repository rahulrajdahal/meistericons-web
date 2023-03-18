import { queries } from '@/utils/queries';
import { useQueries } from 'react-query';

export const fetchIcons = () =>
  useQueries([
    {
      queryKey: queries.FETCH_PACKAGE_JSON,
      queryFn: () => fetch('https://unpkg.com/meistericons@latest/package.json'),
    },
    {
      queryKey: queries.FETCH_ICON_NODES_JSON,
      queryFn: () => fetch('https://unpkg.com/meistericons@latest/icon-nodes.json'),
    },
    {
      queryKey: queries.FETCH_TAGS_JSON,
      queryFn: () => fetch('https://unpkg.com/meistericons@latest/tags.json'),
    },
    {
      queryKey: queries.FETCH_CATEGORIES_JSON,
      queryFn: () => fetch('https://unpkg.com/meistericons@latest/categories.json'),
    },
  ]);

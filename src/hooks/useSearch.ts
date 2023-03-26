import { Icon, filterIcons, Tags } from '@/utils/helpers';

export const useSearch = (icons: Icon[], tags: Tags, query: string) => {
  if (!query) return icons;

  const searchString = query.toLowerCase();

  return filterIcons(icons, tags, searchString);
};

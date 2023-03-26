import { Categories, Icon, filterCategories } from '@/utils/helpers';

export const useCategory = (icons: Icon[], categories: Categories, category: string) => {
  if (category.toLowerCase() === 'all icons') return icons;

  const searchString = category.toLowerCase();
  return filterCategories(icons, categories, searchString);
};

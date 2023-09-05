import { Icon, IconType, filterIconTypes } from '@/utils/helpers';

export const useIconType = (icons: Icon[], type: IconType) => {
  return filterIconTypes(icons, type);
};

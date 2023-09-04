import { Icon, IconType, Tags, filterIconTypes, filterIcons } from '@/utils/helpers';

export const useIconType = (icons: Icon[], type: IconType) => {
  return filterIconTypes(icons, type);
};

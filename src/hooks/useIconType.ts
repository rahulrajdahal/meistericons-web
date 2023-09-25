import { IconType, filterIconTypes } from '@/utils/helpers';
import { useFetchIcons } from './useFetchIcons';
import * as React from 'react';

// export const useIconType = (icons: Icon[], type: IconType) => filterIconTypes(icons, type);

export const useIconType = (iconType: IconType) => {
  const { meisterIcons } = useFetchIcons();

  const icons = React.useMemo(() => {
    if (meisterIcons) {
      return Object.entries(meisterIcons.iconNodes);
    }
    return [];
  }, [meisterIcons]);

  const filteredIcons = React.useMemo(() => filterIconTypes(icons, iconType), [iconType]);

  const iconTypeIcons = React.useMemo(() => {
    if (filteredIcons) {
      return { icons: filteredIcons };
    }
    return { icons };
  }, [filteredIcons, icons]);

  return iconTypeIcons;
};

import { useFetchIcons } from '@/hooks/useFetchIcons';
import { useIconType } from '@/hooks/useIconType';
import { IconNode, IconType } from '@/utils/helpers';
import * as React from 'react';

const defaultValue: {
  icons: IconNode[];
  iconType: IconType;
  setIconType: React.Dispatch<React.SetStateAction<IconType>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
} = {
  icons: [],
  iconType: 'all',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIconType: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {},
  loading: false,
};

export const IconTypeContext = React.createContext(defaultValue);

export default function IconTypeContextProvider({ children }: { children: React.ReactNode }) {
  const { meisterIcons } = useFetchIcons();
  const [iconType, setIconType] = React.useState(defaultValue.iconType);
  const [loading, setLoading] = React.useState(false);

  const icons = React.useMemo(() => {
    if (meisterIcons) {
      return Object.entries(meisterIcons.iconNodes);
    }
    return [];
  }, [meisterIcons]);

  const filteredIcons = useIconType(icons, iconType);

  const value = React.useMemo(() => {
    if (filteredIcons) {
      return { icons: filteredIcons, iconType, setIconType, loading, setLoading };
    }
    return { icons, iconType, setIconType, loading, setLoading };
  }, [filteredIcons, icons, iconType, setIconType, loading, setLoading]);

  return <IconTypeContext.Provider value={value}>{children}</IconTypeContext.Provider>;
}

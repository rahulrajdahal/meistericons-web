import * as React from 'react';
import { useFetchIcons } from '@/hooks/useFetchIcons';
import { Icon, IconNode, IconType, createReactComponent, filterIconTypes } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import SponserBanner from '@/components/SponserBanner/SponserBanner.tsx';
import { useCategory, useIconType, useSearch, useWindowSize } from '@/hooks';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const { loading } = useFetchIcons();
  const [searchParams, setSearchParams] = useSearchParams();

  const { icons: searchIcons } = useSearch(searchParams.get('q') ?? '');
  const { icons: categoryIcons } = useCategory(searchParams.get('category') ?? 'all icons');
  const { icons: iconTypeIcons } = useIconType((searchParams.get('type') as IconType) ?? 'all');

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };

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

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`grid grid-cols-4 gap-20 place-items-center  max-w-min mt-20 mb-[140px]
md:gap-x-[8.75rem] md:gap-y-[3.75rem] md:px-[2%]
lg:grid-cols-10
2xl:px-[14.79%] `}
      >
        {loading
          ? Array(50)
              .fill(null)
              .map((_, i) => (
                <div key={i.toPrecision()} className="w-12 h-12">
                  <Skeleton className="w-full h-full rounded-[40px]" />
                </div>
              ))
          : icons?.map(([name, iconNode]) => (
              <IconButton
                key={name}
                name={name}
                component={createReactComponent(name, iconNode as IconNode[])}
                icons={icons}
              />
            ))}
      </motion.div>

      <SponserBanner />
    </>
  );
}

{
  /* <IconButton
key={name}
name={name}
component={createReactComponent(name, iconNode as IconNode[])}
icons={icons}
/> */
}

import * as React from 'react';
import { useFetchIcons } from '@/hooks/useFetchIcons';
import { Icon, IconNode, createReactComponent, filterIconTypes } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import SponserBanner from '@/components/SponserBanner/SponserBanner.tsx';
import { IconContext } from '@/contexts/IconContext';
import { useCategory, useIconType, useSearch } from '@/hooks';

export default function HomePage() {
  const { loading } = useFetchIcons();

  const { query, iconType, category } = React.useContext(IconContext);
  const { icons: searchIcons } = useSearch(query);
  const { icons: categoryIcons } = useCategory(category);
  const { icons: iconTypeIcons } = useIconType(iconType);

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
    if (query.length > 0) {
      if (iconType !== 'all') {
        return filterIconTypes(searchIcons as Icon[], iconType);
      }
      return searchIcons;
    }

    if (category !== 'all icons') {
      if (iconType !== 'all') {
        return filterIconTypes(categoryIcons as Icon[], iconType);
      }
      return categoryIcons;
    }

    if (query.length > 0) {
      return searchIcons;
    }

    if (category !== 'all icons') {
      return categoryIcons;
    }

    if (iconType !== 'all') {
      return iconTypeIcons;
    }

    return searchIcons;
  }, [iconType, query, category, searchIcons, iconTypeIcons, categoryIcons, searchIcons]);
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-4 gap-20 place-items-center max-w-min my-20 mb-[140px]
      md:gap-x-[8.75rem] md:gap-y-[3.75rem] md:px-[2%]
      lg:grid-cols-10
      2xl:px-[14.79%]"
      >
        {loading
          ? Array(50)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="w-12 h-12">
                  <Skeleton className="w-full h-full rounded-[40px]" />
                </div>
              ))
          : icons?.map(([name, iconNode]) => (
              <IconButton
                key={name as string}
                name={name as string}
                component={createReactComponent(name as string, iconNode as IconNode[])}
                icons={icons}
              />
            ))}
      </motion.div>

      <SponserBanner />
    </>
  );
}

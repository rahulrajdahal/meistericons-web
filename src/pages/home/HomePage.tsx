import * as React from 'react';
import './styles.css';

import { useFetchIcons } from '@/hooks/useFetchIcons';
import { IconNode, createReactComponent } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import SponserBanner from '@/components/SponserBanner/SponserBanner.tsx';
import { SearchContext } from '@/contexts/SearchContext';
import { CategoryContext } from '@/contexts/CategoryContext';

export default function HomePage() {
  const { loading } = useFetchIcons();

  const { icons, query } = React.useContext(SearchContext);
  const { icons: categoryIcons } = React.useContext(CategoryContext);

  console.log(categoryIcons, 'categoicons');

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

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-4 gap-20 px-[14.79%] my-20 mb-[140px]
      md:gap-[100px] place-items-center  max-w-min
      lg:grid-cols-10"
      >
        {loading
          ? Array(50)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="w-12 h-12">
                  <Skeleton className="w-full h-full rounded-[40px]" />
                </div>
              ))
          : query.length > 0
          ? icons?.map(([name, iconNode]) => (
              <IconButton
                key={name as string}
                name={name as string}
                component={createReactComponent(name as string, iconNode as IconNode[])}
              />
            ))
          : categoryIcons?.map(([name, iconNode]) => (
              <IconButton
                key={name as string}
                name={name as string}
                component={createReactComponent(name as string, iconNode as IconNode[])}
              />
            ))}
      </motion.div>

      <SponserBanner />
    </>
  );
}

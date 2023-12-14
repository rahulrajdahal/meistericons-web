import * as React from 'react';
import { useFetchIcons } from '@/hooks/useFetchIcons';
import { IconNode, createReactComponent, fetchIcon } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import SponserBanner from '@/components/SponserBanner/SponserBanner.tsx';
import useIcons from '@/hooks/useIcons';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function HomePage() {
  const { icons } = useIcons();
  const { loading } = useFetchIcons();

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

  if (!icons || loading) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`grid grid-cols-4 gap-20 place-items-center  max-w-min mt-20 mb-[140px]
md:gap-x-[8.75rem] md:gap-y-[3.75rem] md:px-[2%]
lg:grid-cols-10
2xl:px-[14.79%] `}
      >
        {Array(50)
          .fill(null)
          .map((_, i) => (
            <div key={i.toPrecision()} className="w-12 h-12">
              <Skeleton className="w-full h-full rounded-[40px]" />
            </div>
          ))}
      </motion.div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={icons.length}
      hasMore={false}
      next={async () => await fetchIcon(icons, 10, 0)}
      loader={<h4>Loading...</h4>}
      className={`w-full`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`grid grid-cols-4 gap-20 place-items-center  mt-20 mb-[140px]
md:gap-x-[8.75rem] md:gap-y-[3.75rem] md:px-[2%]
lg:grid-cols-10
2xl:px-[14.79%] `}
      >
        {icons?.map(([name, iconNode]) => (
          <IconButton
            key={name}
            name={name}
            component={createReactComponent(name, iconNode as IconNode[])}
            icons={icons}
          />
        ))}
      </motion.div>

      <SponserBanner />
    </InfiniteScroll>
  );
}

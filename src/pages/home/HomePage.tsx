import * as React from 'react';
import { useFetchIcons } from '@/hooks/useFetchIcons';
import { IconNode, createReactComponent } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import SponserBanner from '@/components/SponserBanner/SponserBanner.tsx';
import { SearchContext } from '@/contexts/SearchContext';
import { CategoryContext } from '@/contexts/CategoryContext';
import { IconTypeContext } from '@/contexts/IconTypeContext';

export default function HomePage() {
  const { loading } = useFetchIcons();

  const { icons: iconTypeIcons, iconType, loading: iconTypeLoading } = React.useContext(IconTypeContext);
  const { icons: searchIcons, query } = React.useContext(SearchContext);
  const { icons: categoryIcons, category } = React.useContext(CategoryContext);

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
    if (query.length > 0 && iconType !== 'all') {
      if (iconType === 'linear') {
        return searchIcons.filter(([name, iconNode]) => {
          if (name) {
            const lastString = (name as string).toLowerCase().split('').at(-1);

            if (lastString !== 'b') {
              return [name, iconNode];
            }
          }
        });
      }

      if (iconType === 'bold') {
        return searchIcons.filter(([name, iconNode]) => {
          if (name) {
            const lastString = (name as string).toLowerCase().split('').at(-1);

            if (lastString === 'b') {
              return [name, iconNode];
            }
          }
        });
      }

      return [...searchIcons, ...iconTypeIcons];
    }

    if (category !== 'all icons' && iconType !== 'all') {
      if (iconType === 'linear') {
        return categoryIcons.filter(([name, iconNode]) => {
          if (name) {
            const lastString = (name as string).toLowerCase().split('').at(-1);

            if (lastString !== 'b') {
              return [name, iconNode];
            }
          }
        });
      }

      if (iconType === 'bold') {
        return categoryIcons.filter(([name, iconNode]) => {
          if (name) {
            const lastString = (name as string).toLowerCase().split('').at(-1);

            if (lastString === 'b') {
              return [name, iconNode];
            }
          }
        });
      }

      return [...categoryIcons, ...iconTypeIcons];
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
  }, [iconType, query, category, searchIcons]);

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
        {
          loading || iconTypeLoading
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
              ))

          // : iconType !== 'all'
          // ? iconTypeIcons?.map(([name, iconNode]) => (
          //     <IconButton
          //       key={name as string}
          //       name={name as string}
          //       component={createReactComponent(name as string, iconNode as IconNode[])}
          //     />
          //   ))
          // : query.length > 0
          // ? icons?.map(([name, iconNode]) => (
          //     <IconButton
          //       key={name as string}
          //       name={name as string}
          //       component={createReactComponent(name as string, iconNode as IconNode[])}
          //     />
          //   ))
          // : categoryIcons?.map(([name, iconNode]) => (
          //     <IconButton
          //       key={name as string}
          //       name={name as string}
          //       component={createReactComponent(name as string, iconNode as IconNode[])}
          //     />
          //   ))
        }
      </motion.div>

      <SponserBanner />
    </>
  );
}

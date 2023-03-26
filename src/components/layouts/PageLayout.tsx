import * as React from 'react';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Css, Figma, Github, Npm, Svg } from '@/assets/icons';

import { motion } from 'framer-motion';
import { Search } from '@/features/home';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const iconsAddedVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -600,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  const iconsVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -2000,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const icons = [
    { id: 1, icon: Figma },
    { id: 2, icon: Svg },
    { id: 3, icon: Css },
    { id: 4, icon: Npm },
    { id: 5, icon: Github },
  ];

  return (
    <React.Suspense fallback={<Loading />}>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center mt-[180px]">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={iconsAddedVariants}
          className="px-6 py-3 bg-white rounded-lg myshadow bounce text-base leading-4 text-grey-800 font-medium"
        >
          🎁 +60 icons added
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="font-normal text-[36px] leading-[60px] text-center text-grey-800 mt-8 w-[80%]
        md:text-[80px] md:leading-[100px] md:w-[62%]"
        >
          Over
          <span className="text-gradient font-extrabold"> 2000+ </span>
          Open-Source Icons for your next BIG project
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconsVariants}
          className="flex items-center gap-10 mt-12 grayscale md:gap-[50px]"
        >
          {icons?.map(({ icon: Icon, id }) => (
            <motion.span
              initial="hidden"
              animate="visible"
              variants={iconVariants}
              key={id}
              className="hover:cursor-pointer"
            >
              <Icon width={40} height={40} className="w-10 h-10" />
            </motion.span>
          ))}
        </motion.div>
        <Search />

        {children}
      </div>

      <Footer />
    </React.Suspense>
  );
}

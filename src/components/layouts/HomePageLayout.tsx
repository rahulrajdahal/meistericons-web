import * as React from 'react';
import Loading from '../Loading/Loading';
import { css, figma, github, npm, svg } from '@/assets/svgs';

import { motion } from 'framer-motion';
import { Search } from '@/features/home';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import './styles.css';
import { useNavPosition } from '@/hooks/useNavPosition';
import { useAnalyticsEvent } from '@/hooks';

interface Props {
  children: React.ReactNode;
}

export default React.memo(function HomePageLayout({ children }: Props) {
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
    {
      id: 1,
      title: 'figma',
      icon: figma,
      to: 'https://www.figma.com/community/plugin/1065974489689844727/MeisterIcons',
    },
    { id: 2, title: 'svg', icon: svg, to: 'https://github.com/rahulrajdahal/meistericons' },
    { id: 3, title: 'css', icon: css, to: 'https://github.com/rahulrajdahal/meistericons' },
    { id: 4, title: 'npm', icon: npm, to: 'https://www.npmjs.com/package/meistericons' },
    { id: 5, title: 'github', icon: github, to: 'https://github.com/rahulrajdahal/meistericons' },
  ];

  const stickyRef = React.useRef<HTMLSpanElement>(null);

  useNavPosition(stickyRef);

  const gaEventTrack = useAnalyticsEvent('Services');

  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center justify-center mt-[8.75rem]">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={iconsAddedVariants}
          className="px-6 py-3 bg-white rounded-lg myshadow bounce text-base leading-4 text-grey-800 font-medium"
        >
          🎁 +999 icons added
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="font-normal text-[36px] h-full leading-[60px] text-center text-grey-800 mt-8 w-[80%]
        md:text-[3.75rem] md:leading-[4.5rem] md:w-[45%]"
        >
          Over <span className="text-gradient font-extrabold">1500+</span> Open-Source Icons for your next BIG project
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconsVariants}
          className="flex items-center gap-10 mt-12 md:gap-[50px]"
        >
          {icons?.map(({ icon, id, to, title }) => (
            <motion.span
              initial="hidden"
              animate="visible"
              variants={iconVariants}
              key={id}
              className="hover:cursor-pointer"
            >
              <Link
                to={to}
                onClick={() => gaEventTrack(`${title} clicked!`, `${title}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img width={32} height={32} src={icon} alt={title} className="min-w-[2.5rem] h-8" />
              </Link>
            </motion.span>
          ))}
        </motion.div>

        <React.Suspense fallback={<Loading />}>
          <Search />
          {children}
        </React.Suspense>
      </div>
    </PageLayout>
  );
});

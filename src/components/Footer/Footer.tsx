import * as React from 'react';
import { Dribbble, Instagram, Linkedin, Mni, Twitter } from '@/assets/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { routes } from '@/utils/routes';

export default function Footer() {
  const socials = [
    { id: 1, icon: <Dribbble className="w-6 h-6" /> },
    { id: 2, icon: <Twitter className="w-6 h-6" /> },
    { id: 3, icon: <Linkedin className="w-6 h-6" /> },
    { id: 4, icon: <Instagram className="w-6 h-6" /> },
  ];

  const links = [
    { id: 1, link: <Link to={routes.landing}>All Icons</Link> },
    {
      id: 2,
      link: (
        <Link to="https://github.com/rahulrajdahal/meistericons" target="_blank">
          Github{' '}
        </Link>
      ),
    },

    { id: 3, link: <Link to={`${routes.howToUse}/${routes.figma}`}>How to Use</Link> },
    {
      id: 4,
      link: (
        <Link to="https://www.figma.com/community/plugin/1065974489689844727/MeisterIcons" target="_blank">
          Figma Plugin
        </Link>
      ),
    },
    { id: 5, link: <Link to={routes.landing}>Sponsor</Link> },
    { id: 6, link: <Link to={routes.landing}>SVG Pack</Link> },
    { id: 7, link: <Link to={routes.landing}>Terms of Use</Link> },
    { id: 8, link: <Link to={routes.landing}>Privacy Policy</Link> },
  ];

  const footerVariants = {
    hidden: { y: 500 },
    visible: {
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="px-[12.5%] py-10 bg-grey-900 flex w-full justify-between"
    >
      <section>
        <div className="flex flex-col gap-2 ">
          <Mni className="w-[72px] h-[72px]" />
          <span>
            <strong className="font-bold text-lg text-grey-50 md:text-2xl">meistericons</strong>
            <p className="font-medium text-xs md:text-sm leading-4 tracking-[0.15em] text-grey-200">by MEISTERNATOR</p>
          </span>
        </div>

        <ul className="mt-10 inline-flex items-center gap-5">
          {socials.map(({ id, icon }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
        <p
          className="font-normal text-sm  text-grey-100 mt-[103px]
        md:text-base"
        >
          Made with 💝 in Kathmandu, Nepal
        </p>
      </section>

      <section>
        <ul className="grid gap-y-4 gap-x-[71px] md:grid-cols-2">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`${id === 7 || id === 8 ? 'md:mt-[83px]' : ''} font-normal text-grey-100 text-sm
              md:text-base`}
            >
              {link}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}

import * as React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Close, EllipsisV, GithubFill, Search } from '@/assets/icons';
import { useWindowSize } from '@/hooks';
import { motion } from 'framer-motion';
import { routes } from '@/utils/routes';
import { StyleContext } from '@/contexts/StyleContext';

interface INavbarProps extends React.ComponentPropsWithoutRef<'div'> {
  position?: string;
}

export default function Navbar({ ...props }: Readonly<INavbarProps>) {
  const links = [
    {
      link: (
        <Link to={routes.landing} className="flex items-center gap-[0.31rem]">
          <Search /> Icons
        </Link>
      ),
      id: 1,
    },
    { link: <Link to={`${routes.howToUse}/${routes.figma}`}>How to Use?</Link>, id: 2 },
    { link: <Link to={routes.landing}>Sponsor</Link>, id: 3 },
    {
      link: (
        <Link
          to="https://github.com/rahulrajdahal/meistericons"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium inline-flex gap-1 items-center px-4 py-2 bg-[#3E64FF] rounded-[10px] text-grey-100"
          style={{
            boxShadow: '0px 3px 20px 0px rgba(62, 100, 255, 0.40)',
          }}
        >
          <GithubFill />
          Start Here
        </Link>
      ),
      id: 4,
    },
  ];

  const { width } = useWindowSize();

  const renderLinks = () => (
    <ul className="inline-flex w-full items-center gap-[74px]">
      {links.map(({ link, id }) => (
        <li key={id}>
          {id !== 4 ? (
            <p className="font-medium inline-flex items-center gap-[5px] text-lg text-grey-700">{link}</p>
          ) : (
            link
          )}
        </li>
      ))}
    </ul>
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { setNavProps, navProps } = React.useContext(StyleContext);

  const renderHamburgerMenu = () => {
    const linkVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    const menusVariants = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 1,
        scale: 0,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    };

    return (
      <>
        <EllipsisV
          className="hover:cursor-pointer"
          onClick={() => {
            setIsOpen(() => true);
            setNavProps(() => ({ hamburgerOpen: true }));
          }}
        />

        {isOpen ? (
          <div className="px-4 py-3 z-10 animate_hamburger_menu fixed top-0 bottom-0 left-0 right-0 bg-white">
            <span className="inline-flex items-center w-full justify-between">
              <Logo />
              <motion.div whileHover={{ rotate: 90 }}>
                <Close
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setIsOpen(() => false);
                    setNavProps(() => ({ hamburgerOpen: false }));
                  }}
                />
              </motion.div>
            </span>

            <motion.ul
              variants={menusVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-6 mt-12"
            >
              {links.map(({ link, id }) => (
                <motion.li key={id} variants={linkVariants}>
                  {id !== 4 ? (
                    <p className="font-medium inline-flex items-center gap-[5px] text-lg text-grey-700">{link}</p>
                  ) : (
                    link
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ) : null}
      </>
    );
  };

  const navVariants = {
    hidden: {
      y: -100,
      scale: 1.5,
    },
    visible: {
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.nav
      animate="visible"
      initial="hidden"
      variants={navVariants}
      className={`${props.className} ${
        navProps.searchOffset ? 'hidden' : 'sticky top-0'
      }  max-h-[3.75rem] bg-white z-10 w-full h-full inline-flex items-center justify-between px-[4%] py-3 md:py-7 md:px-[12.5%]`}
    >
      <Logo />

      {width > 768 ? renderLinks() : renderHamburgerMenu()}
    </motion.nav>
  );
}

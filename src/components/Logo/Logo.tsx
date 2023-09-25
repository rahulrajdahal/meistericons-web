import * as React from 'react';
import { Mni, addSquare } from '@/assets/icons';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { routes } from '@/utils/routes';
import { useLocalStorage } from '@/hooks/useLocalStorage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ILogoProps = React.ComponentPropsWithoutRef<'div'>;

export default function Logo() {
  const [isFirstLoad, setIsFirstLoad] = useLocalStorage('isFirstLoad', 'y');

  const [isOpen, setIsOpen] = React.useState(isFirstLoad === 'y' ? true : false);

  const version03 = [
    { id: 1, update: 'We’ve added over 999 icons to MeisterIcons for all the categories available.' },
    { id: 2, update: 'Added three new categories - clothing & fashion, music and gaming.' },
    { id: 3, update: 'We’ve introduced bold icons for most of the existing linear icons.' },
    { id: 4, update: 'We’ve also worked massively on code refactoring and optimization.' },
    { id: 5, update: 'Some icons with typos in their names have been fixed.' },
    { id: 6, update: 'Updated the website and figma plugin with new functionalities.' },
    { id: 7, update: 'We’ve also updated the “how to use” guide for all platforms.' },
  ];
  const version01 = [
    { id: 1, update: 'MeisterIcons first release has been introduced with over 500 linear icons.' },
    { id: 2, update: 'Published the MeisterIcons plugin for the figma community.' },
    { id: 3, update: 'Added support for npm and React.' },
    { id: 4, update: 'Website has been updated with all the icons and basic search functionality. ' },
    { id: 5, update: 'Made with ❤️ in Kathmandu, Nepal.' },
  ];

  const handleChangelogClose = () => {
    if (isFirstLoad === 'y') {
      setIsFirstLoad('n');
    }
    setIsOpen(false);
  };

  return (
    <Link to={routes.landing} data-testid="logo" className="inline-flex items-center gap-2">
      <Mni className="w-12 h-12" width={48} height={48} />
      <div className="flex flex-col">
        <strong className="font-medium text-lg text-grey-800">MeisterIcons</strong>
        <button
          onClick={() => setIsOpen(true)}
          className="font-normal text-sm leading-[14px] text-grey-600 px-[0.5625rem] py-1 bg-grey-200 rounded-[1.625rem] w-fit"
        >
          v 1.0.0
        </button>

        <Transition appear show={isOpen} as={React.Fragment}>
          <Dialog open={isOpen} onClose={handleChangelogClose} className="relative z-50">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 w-screen overflow-y-auto">
              {/* Container to center the panel */}
              <div className="flex items-center justify-center p-4 mt-40 overflow-y-hidden">
                {/* The actual dialog panel  */}
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="ease-in duration-200"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="mx-auto rounded-[2.5rem] max-w-[62.5rem] w-full h-full min-h-[59.75rem] bg-white p-10">
                    <div className="flex justify-between items-center mb-6 ">
                      <Dialog.Title
                        className={`text-grey-900 text-[2rem] font-semibold leading-10 -tracking-[0.04rem]`}
                      >
                        Changelog
                      </Dialog.Title>

                      <button title="close" className="text-2xl" onClick={handleChangelogClose}>
                        &#x2715;
                      </button>
                    </div>

                    <strong className=" text-xl leading-8 -tracking-[0.025rem font-medium text-grey-900">
                      Version 0.3 - 3rd Sep 2023
                    </strong>

                    <ul className="mt-3 flex flex-col gap-3 mb-6">
                      {version03.map(({ id, update }) => (
                        <li key={id} className="flex items-center gap-3">
                          <img src={addSquare} alt="add-square" className="w-6 h-6 text-grey-600" />
                          {update}
                        </li>
                      ))}
                    </ul>

                    <strong className=" text-xl leading-8 -tracking-[0.025rem font-medium text-grey-900">
                      Version 0.1 - 31st Apr 2022
                    </strong>

                    <ul className="mt-3 flex flex-col gap-3">
                      {version01.map(({ id, update }) => (
                        <li key={id} className="flex items-center gap-3">
                          <img src={addSquare} alt="add-square" className="w-6 h-6 text-grey-600" />
                          {update}
                        </li>
                      ))}
                    </ul>

                    {/* ... */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </Link>
  );
}

Logo.defaultProps = {};

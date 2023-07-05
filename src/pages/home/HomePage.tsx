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
import { IconsContext } from '@/contexts/IconsContext';

export default function HomePage() {
  const { loading } = useFetchIcons();

  const { icons } = React.useContext(IconsContext);

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
      md:gap-[100px]   max-w-min
      lg:grid-cols-11"
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
              <Disclosure key={name as string} as={'div'} className={'flex  flex-col items-center max-w-min w-full'}>
                {({ open }) => (
                  <>
                    <Disclosure.Button title={name as string} aria-label={name as string}>
                      <IconButton
                        key={name as string}
                        name={name as string}
                        component={createReactComponent(name as string, iconNode as IconNode[])}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div className={`py-4 items-center w-full flex flex-col justify-center max-w-min`}>
                          {open ? (
                            <div className="flex justify-center items-center px-[296px] rounded-xl gap-16 bg-grey-100 h-full py-12 w-full max-w-min mt-10">
                              <Icon component={createReactComponent(name as string, iconNode as IconNode[])} />
                              <div className="flex flex-col gap-5">
                                <p className="font-bold text-xl leading-8 text-grey-800">{name as string}</p>
                                <span className="inline-flex gap-3 items-center">
                                  <button className="px-6 py-3 bg-primary-600 rounded-lg font-medium text-base text-grey-50 whitespace-nowrap">
                                    Download SVG
                                  </button>
                                  <button className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap">
                                    Download PNG
                                  </button>
                                  <button className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap">
                                    Copy SVG
                                  </button>
                                </span>
                                <span className="bg-grey-900 rounded-xl p-5 font-bold text-sm text-grey-50">
                                  {'<i'} <span className="text-[#8BA2FF]">class</span> {'=“'}{' '}
                                  <span className="text-[#FFA83F]">mni</span>{' '}
                                  <span className="text-[#77B876]">mni-{name as string}</span> {'”></i>'}
                                </span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
      </motion.div>

      <SponserBanner />
    </>
  );
}

const Icon = ({ component: IconComponent }: { component: any }) => {
  return (
    <div className="w-[240px] h-[240px] bg-white flex items-center justify-center">
      <IconComponent />
    </div>
  );
};

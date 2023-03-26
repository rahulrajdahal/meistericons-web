import * as React from 'react';
import './styles.css';

import { useFetchIcons } from '@/hooks/useFetchIcons';
import { IconNode, createReactComponent } from '@/utils/helpers';
import IconButton from '@/components/IconButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';

export default function HomePage() {
  const { meisterIcons, loading } = useFetchIcons();

  const icons = React.useMemo(() => {
    if (meisterIcons) {
      return Object.entries(meisterIcons?.iconNodes);
    }
  }, [meisterIcons]);

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-4 gap-20 px-[14.79%] my-20 
      md:gap-[100px]
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
        : icons?.map(([name, iconNode]: [string, IconNode]) => (
            <Disclosure key={name} as={'div'} className={'flex flex-col items-center'}>
              {({ open }) => (
                <>
                  <Disclosure.Button title={name} aria-label={name}>
                    <IconButton key={name} name={name} component={createReactComponent(name, iconNode)} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className={'w-full'}
                  >
                    <Disclosure.Panel
                      className={`
                    flex  flex-col items-center py-4 w-full`}
                    >
                      {open ? (
                        <div className="flex justify-center items-center gap-16 bg-grey-100 h-full py-12 w-full">
                          <Icon component={createReactComponent(name, iconNode)} />
                          <div className="flex flex-col gap-5">
                            <p className="font-bold text-xl leading-8 text-grey-800">{name}</p>
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
                              {'<i'} <span className="text-[#8BA2FF]">class</span> {'="'}{' '}
                              <span className="text-[#FFA83F]">mni</span>{' '}
                              <span className="text-[#77B876]">mni-{name}</span> {'"></i>'}
                              {/* {`<i class="mni mni-${name}"></i>`} */}
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
    </motion.div>
  );
}

const Icon = ({ component: IconComponent }: any) => {
  return (
    <div className="w-[240px] h-[240px] bg-white flex items-center justify-center rounded-[48px]">
      <IconComponent />
    </div>
  );
};

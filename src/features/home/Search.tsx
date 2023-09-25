import * as React from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { DownArrow, Search as SearchIcon } from '@/assets/icons';
import { IconContext } from '@/contexts/IconContext';
import { StyleContext } from '@/contexts/StyleContext';

const searchVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.6,
    },
  },
};

export default function Search() {
  const { iconType, setQuery, setCategory, setIconType, query } = React.useContext(IconContext);
  const { navProps, setNavStyles, setNavProps } = React.useContext(StyleContext);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTimeout(() => {
      setQuery(value);
      setCategory('all icons');
    }, 5000);
  };

  const categories = [
    { id: 1, category: 'All Icons' },
    { id: 2, category: 'Arrows' },
    { id: 3, category: 'Business' },
    { id: 4, category: 'Charts' },
    { id: 5, category: 'Children' },
    { id: 6, category: 'Code' },
    { id: 7, category: 'Communication' },
    { id: 8, category: 'Date&Time' },
    { id: 9, category: 'Design' },
    { id: 10, category: 'Ecommerce' },
    { id: 11, category: 'Education' },
    { id: 12, category: 'Email' },
    { id: 13, category: 'Files&Folder' },
    { id: 14, category: 'Food&Drinks' },
    { id: 15, category: 'Images' },
    { id: 16, category: 'Layouts' },
    { id: 17, category: 'Maps&Navigation' },
    { id: 18, category: 'Mediacontrols' },
    { id: 19, category: 'Medical' },
    { id: 20, category: 'Menu' },
    { id: 21, category: 'Nature' },
    { id: 22, category: 'Security' },
    { id: 23, category: 'Sports' },
    { id: 24, category: 'Technology' },
    { id: 25, category: 'Text' },
    { id: 26, category: 'Transportation' },
    { id: 27, category: 'Uiessentials' },
    { id: 28, category: 'Useractions' },
    { id: 29, category: 'Users' },
    { id: 30, category: 'Weather' },
  ];

  const [selected, setSelected] = React.useState(categories[0]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerOffsetTop = containerRef.current?.offsetTop;

        if (containerOffsetTop >= window.scrollY) {
          setNavStyles(`relative`);
          setNavProps((prev) => ({ ...prev, searchOffset: true }));
        }

        if (window.scrollY >= containerOffsetTop) {
          setNavProps((prev) => ({ ...prev, searchOffset: false }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { capture: true });

    return () => window.removeEventListener('scroll', handleScroll, { capture: true });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={searchVariants}
      className={`${
        navProps.hamburgerOpen ? 'hidden' : 'sticky top-0'
      } w-full border-[1px] border-grey-300 rounded-lg bg-white z-10 min-h-[60px]
       mt-[101px]
       md:px-[12.5%]`}
    >
      <div
        className="border-[1px] border-grey-300 border-r-0 border-y-0 w-full min-h-[60px] flex items-center
md:px-5"
        ref={containerRef}
      >
        <span className="inline-flex items-center gap-2 w-full px-5 md:px-0">
          <SearchIcon className="w-[18px] h-[18px]" />
          <input
            value={query}
            onChange={handleSearchOnChange}
            type="search"
            placeholder="Search for..."
            className=" w-full h-full outline-none"
          />
        </span>

        <ToggleGroup.Root
          type="single"
          defaultValue="all"
          aria-label="Icon Type"
          className="flex flex-row gap-3 mr-[1.88rem] "
        >
          <ToggleGroup.Item
            className={`${
              iconType === 'all' ? 'bg-grey-800 px-3 py-2 rounded-xl text-grey-50' : 'text-grey-600'
            }  text-base font-medium `}
            value="all"
            aria-label="All"
            onClick={() => {
              setIconType('all');
            }}
          >
            All
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={`${
              iconType === 'linear' ? 'bg-grey-800 px-3 py-2 rounded-xl text-grey-50' : 'text-grey-600'
            }  text-base font-medium `}
            value="linear"
            aria-label="Linear"
            onClick={() => {
              setIconType('linear');
            }}
          >
            Linear
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={`${
              iconType === 'bold' ? 'bg-grey-800 px-3 py-2 rounded-xl text-grey-50' : 'text-grey-600'
            }  text-base font-medium `}
            value="bold"
            aria-label="Bold aligned"
            onClick={() => {
              setIconType('bold');
            }}
          >
            Bold
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <Listbox
          value={selected}
          onChange={(value) => {
            setSelected(value);
            setQuery('');

            // setSelected();
          }}
          as={'div'}
          className="relative border-[1px] border-grey-300 min-h-[60px] flex items-center border-y-0"
        >
          <Listbox.Button className="gap-0.5 cursor-default inline-flex items-center bg-white py-5 px-[21px] text-left">
            <span className="block truncate">{selected.category}</span>

            <DownArrow width={18} height={18} className="w-[18px] h-[18px]" aria-hidden="true" />
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute top-[70px] right-0 dropdown-shadow bg-grey-900 rounded-xl py-6 min-w-[260px] max-h-[396px] overflow-y-scroll">
              {categories.map((category, id) => (
                <Listbox.Option
                  key={id}
                  onClick={() => setCategory(category.category)}
                  className={({ active }) =>
                    `font-medium text-lg  px-6 relative cursor-default select-none mb-3
            ${active ? 'bg-grey-50 text-grey-900 hover:cursor-pointer' : 'text-grey-50'}
            `
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {category.category}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </motion.div>
  );
}

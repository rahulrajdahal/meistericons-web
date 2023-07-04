import * as React from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import { DownArrow, Search as SearchIcon } from '@/assets/icons';
import useFilteredIcons, { IconsContext } from '@/contexts/IconsContext';

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
  const { query, setQuery } = React.useContext(IconsContext);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={searchVariants}
      className="w-full sticky top-[72px] border-[1px] border-grey-300 rounded-lg bg-white z-10 mt-[101px] min-h-[60px]
md:px-[12.5%] md:top-[104px]"
    >
      <div
        className="border-[1px] border-grey-300 border-r-0 border-y-0 w-full min-h-[60px] flex items-center
md:px-5"
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

        <Listbox
          value={selected}
          onChange={setSelected}
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

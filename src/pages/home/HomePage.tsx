import * as React from 'react';
import { Navbar } from '@/components';
import './styles.css';
import { Css, DownArrow, Figma, Github, Npm, Search, Svg } from '@/assets/icons';
import { Listbox, Transition } from '@headlessui/react';

export default function HomePage() {
  const icons = [
    { id: 1, icon: <Figma width={40} height={40} className="w-10 h-10" /> },
    { id: 2, icon: <Svg width={40} height={40} className="w-10 h-10" /> },
    { id: 3, icon: <Css width={40} height={40} className="w-10 h-10" /> },
    { id: 4, icon: <Npm width={40} height={40} className="w-10 h-10" /> },
    { id: 5, icon: <Github width={40} height={40} className="w-10 h-10" /> },
  ];

  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ];

  const [selected, setSelected] = React.useState(people[0]);

  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col items-center justify-center mt-20">
        <span className="px-6 py-3 bg-white rounded-lg myshadow bounce text-base leading-4 text-grey-800 font-medium">
          🎁 +60 icons added
        </span>
        <h1
          className="font-normal text-5xl leading-[80px] text-center text-grey-800 mt-8 w-[80%]
        md:text-[80px] md:leading-[100px] md:w-[62%]"
        >
          Over
          <span className="text-gradient font-extrabold"> 2000+ </span>
          Open-Source Icons for your next BIG project
        </h1>
        <div className="flex items-center gap-10 mt-12 grayscale md:gap-[50px]">
          {icons.map(({ icon, id }) => (
            <span key={id} className="hover:cursor-pointer">
              {icon}
            </span>
          ))}
        </div>
        <div
          className="w-full border-[1px] border-grey-300 rounded-lg bg-white mt-[101px] min-h-[60px] 
        md:px-[12.5%]"
        >
          <div
            className="border-[1px] border-grey-300 border-r-0 border-y-0 w-full min-h-[60px] flex items-center
          md:px-5"
          >
            <span className="inline-flex items-center gap-2 w-full px-5 md:px-0">
              <Search className="w-[18px] h-[18px]" />
              <input type="search" placeholder="Search for..." className=" w-full h-full outline-none" />
            </span>

            <Listbox
              value={selected}
              onChange={setSelected}
              as={'div'}
              className="relative border-[1px] border-grey-300 min-h-[60px] flex items-center border-y-0"
            >
              <Listbox.Button className="gap-0.5 cursor-default inline-flex items-center bg-white py-5 px-[21px] text-left">
                <span className="block truncate">{selected.name}</span>

                <DownArrow width={18} height={18} className="w-[18px] h-[18px]" aria-hidden="true" />
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute top-[70px] right-0 dropdown-shadow bg-grey-900 rounded-xl py-6 min-w-[260px] max-h-[396px] overflow-y-scroll">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `font-medium text-lg  px-6 relative cursor-default select-none mb-3
                        ${active ? 'bg-grey-50 text-grey-900 hover:cursor-pointer' : 'text-grey-50'}
                        `
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
      </div>
    </>
  );
}

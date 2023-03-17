import { Dribbble, Instagram, Linkedin, Mni, Twitter } from '@/assets/icons';
import * as React from 'react';

export default function Footer() {
  const socials = [
    { id: 1, icon: <Dribbble className="w-6 h-6" /> },
    { id: 2, icon: <Twitter className="w-6 h-6" /> },
    { id: 3, icon: <Linkedin className="w-6 h-6" /> },
    { id: 4, icon: <Instagram className="w-6 h-6" /> },
  ];

  const links = [
    { id: 1, link: 'All Icons' },
    { id: 2, link: 'Github' },
    { id: 3, link: 'How to Use' },
    { id: 4, link: 'Figma Plugin' },
    { id: 5, link: 'Sponsor' },
    { id: 6, link: 'SVG Pack' },
    { id: 7, link: 'Terms of Use' },
    { id: 8, link: 'Privacy Policy' },
  ];

  return (
    <div className="px-[12.5%] py-10 bg-grey-900 flex justify-between">
      <section>
        <div className="flex flex-col gap-2 ">
          <Mni className="w-[72px] h-[72px]" />
          <span>
            <strong className="font-bold text-2xl text-grey-50">meistericons</strong>
            <p className="font-medium text-sm leading-4 tracking-[0.15em] text-grey-200">by MEISTERNATOR</p>
          </span>
        </div>

        <ul className="mt-10 inline-flex items-center gap-5">
          {socials.map(({ id, icon }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
        <p className="font-normal text-base text-grey-100 mt-[103px]">Made with 💝 in Kathmandu, Nepal</p>
      </section>

      <section>
        <ul className="grid grid-cols-2 gap-y-4 gap-x-[71px]">
          {links.map(({ link }) => (
            <li
              key={link}
              className={`${
                link == 'Terms of Use' || link == 'Privacy Policy' ? 'mt-[83px]' : ''
              } font-normal text-base text-grey-100 `}
            >
              {link}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

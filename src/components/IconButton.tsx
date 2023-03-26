import * as React from 'react';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { Disclosure } from '@headlessui/react';

interface Props {
  name: string;
  component: React.FC;
}
export default function IconButton({ component: IconComponent, name }: Props) {
  return (
    // <Disclosure>
    //   {({ open }) => (
    //     <>
    //       <Disclosure.Button title={name} aria-label={name} className="relative" onClick={toggleShowIconDetail}>
    //         <Tooltip title={name} position="top">
    //           <IconComponent />
    //         </Tooltip>
    //       </Disclosure.Button>
    //       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    //         HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>

    <button title={name} aria-label={name} className="relative">
      <Tooltip title={name} position="top">
        <IconComponent />
      </Tooltip>
    </button>
  );
}

import * as React from 'react';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

interface Props {
  name: string;
  component: React.FC;
}
export default function IconButton({ component: IconComponent, name }: Props) {
  return (
    <span title={name} aria-label={name} className="relative p-5 rounded-[20px] hover:bg-grey-100">
      <Tooltip title={name} position="top">
        <IconComponent />
      </Tooltip>
    </span>
  );
}

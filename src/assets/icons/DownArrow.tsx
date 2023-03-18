import * as React from 'react';

function DownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M13.5 7.35l-3.675 3.675c-.3.3-.75.3-1.05 0L5.1 7.35"
        stroke="#445668"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DownArrow;

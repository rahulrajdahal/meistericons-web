import * as React from 'react';

function DownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.849566 0.349562C1.09364 0.105487 1.48937 0.105487 1.73345 0.349562L5.90011 4.51626C5.95327 4.56943 6.00411 4.58318 6.04152 4.58318C6.07844 4.58318 6.12861 4.56968 6.18127 4.51785L10.2618 0.354045C10.5034 0.10752 10.8991 0.10352 11.1456 0.34512C11.3922 0.58672 11.3962 0.982429 11.1545 1.22896L7.06677 5.4001C6.48936 5.97751 5.59361 5.97751 5.01619 5.4001L0.849566 1.23345C0.605483 0.989371 0.605483 0.593637 0.849566 0.349562Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DownArrow;

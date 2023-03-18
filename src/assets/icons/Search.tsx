import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M9 15A6 6 0 109 3a6 6 0 000 12z" stroke="#304254" strokeWidth={1.125} strokeMiterlimit={10} />
      <path
        d="M13.425 13.425l2.25 2.25"
        stroke="#304254"
        strokeWidth={1.125}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Search;

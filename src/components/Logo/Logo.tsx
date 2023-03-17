import * as React from 'react';
import { Mni } from '@/assets/icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ILogoProps = React.ComponentPropsWithoutRef<'div'>;

export default function Logo() {
  return (
    <div data-testid="logo" className="inline-flex items-center gap-2">
      <Mni className="w-12 h-12" width={48} height={48} />
      <span>
        <strong className="font-medium text-lg text-grey-800">MeisterIcons</strong>
        <p className="font-normal text-sm leading-[14px] text-grey-600">v 1.0.0</p>
      </span>
    </div>
  );
}

Logo.defaultProps = {};

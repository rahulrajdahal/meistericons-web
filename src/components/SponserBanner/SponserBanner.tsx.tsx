import { SponserIllustration } from '@/assets/illustrations';
import * as React from 'react';
import Button from '../Button/Button';

interface ISponserBannerProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export default function SponserBanner({ ...props }: ISponserBannerProps) {
  return (
    <div
      className="w-full px-[8%] flex items-center justify-center gap-[120px] bg-[#EB586F1A] h-full pt-[52px] pb-[156px] min-h-[364px] 
      md:px-[24%]"
      {...props}
    >
      <span className="text-center">
        <strong className="font-bold text-[32px] leading-[48px] text-grey-800">Sponsor our Project</strong>
        <p className="mt-3 mb-8 font-normal text-lg leading-8 text-grey-800 max-w-[465px] break-words">
          You can become a sponsor to support the project and gain access to exclusive perks,
        </p>
        <Button size="md" customClasses="bg-[#EB586F] font-medium text-xl text-grey-100">
          Learn More
        </Button>
      </span>
    </div>
  );
}

SponserBanner.defaultProps = {
  children: 'SponserBanner',
};

import * as React from 'react';
import { figma } from '@/assets/images';
import { HowToUsePage } from '@/components/layouts';

export default function Figma() {
  const steps = [
    {
      id: 1,
      step: (
        <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          <strong className="font-bold">Right Click on Figma a</strong>
          nd head over to
          <strong className="font-bold">Plugins.</strong>
        </p>
      ),
    },
    {
      id: 2,
      step: (
        <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          Select
          <strong className="font-bold"> “Browse plugins in Community”.</strong>
        </p>
      ),
    },
    {
      id: 3,
      step: (
        <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          Search for
          <strong className="font-bold"> “MeisterIcons”.</strong>
        </p>
      ),
    },
    {
      id: 4,
      step: (
        <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          Click
          <strong className="font-bold"> “Install”.</strong>
        </p>
      ),
    },
    {
      id: 5,
      step: (
        <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          Then, go to your Figma File and
          <strong className="font-bold"> {`Right Click > Plugins > MeisterIcons`} </strong>
        </p>
      ),
    },
  ];

  return (
    <HowToUsePage
      image={figma}
      title="MeisterIcons is available on Figma as a Plugin. The plugin lets you quickly search for the icons you’re looking
  for."
      steps={steps}
    />
  );
}

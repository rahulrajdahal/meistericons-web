import * as React from 'react';
import { useLocation } from 'react-router-dom';

type Step = { id: number; step: React.ReactNode | string };
export default function HowToUsePage({ title, image, steps }: { title: string; image: string | any; steps: Step[] }) {
  const { pathname } = useLocation();
  const page = pathname.split('/').at(-1);

  return (
    <>
      <strong className=" text-grey-700 text-[2rem] leading-[3rem] -tracking-[0.04rem] font-normal">/{page}</strong>

      <p className="mt-8 mb-6                   text-grey-800 text-lg leading-8 font-normal -tracking-[0.0225rem]">
        {title}
      </p>

      <img src={image} alt="how-to-use" className="w-full h-[25rem] rounded-3xl object-cover" />

      <ul className="flex flex-col gap-8 mt-[2.8rem]">
        {steps.map(({ id, step }) => (
          <li key={id} className="flex flex-col gap-1">
            <p className="text-grey-700 font-base font-semibold leading-6 tracking-[0.12rem]">STEP {id}</p>
            {step}
          </li>
        ))}
      </ul>
    </>
  );
}

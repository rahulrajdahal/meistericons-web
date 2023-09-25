import * as React from 'react';
import { Figma } from '@/assets/icons';
import Loading from '../Loading/Loading';
import { routes } from '@/utils/routes';
import { Link, useLocation } from 'react-router-dom';
import PageLayout from './PageLayout';

export default function HowtoUsePageLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const activeMenu = React.useMemo(() => {
    return pathname.split('/').at(-1);
  }, [pathname]);

  const menus = [
    {
      id: 1,
      title: 'FOR DESIGNERS',
      links: [{ id: 1, link: 'Figma', to: `${routes.howToUse}/${routes.figma}` }],
    },
    {
      id: 2,
      title: 'FOR DEVELOPERS',
      links: [
        { id: 1, link: 'npm', to: `${routes.howToUse}/${routes.npm}` },
        { id: 2, link: 'React', to: `${routes.howToUse}/${routes.react}` },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="px-60 flex justify-between gap-[10.06rem] py-40 w-full">
        <aside className="w-full flex-[0.2]">
          <strong className="text-grey-700 text-[2rem] leading-[3rem] -tracking-[0.04rem] font-bold">How to Use</strong>
          <div className="mt-8 flex flex-col gap-10">
            {menus.map(({ id, links, title }) => (
              <div key={id}>
                <strong className="text-grey-700 text-base font-semibold tracking-[0.12rem]">{title}</strong>

                <ul className="flex flex-col gap-3 mt-3">
                  {links.map(({ id, link, to }) => (
                    <li key={id}>
                      <Link
                        to={to}
                        className={`w-full ${
                          activeMenu === link.toLowerCase() ? 'text-grey- ' : 'text-grey-700'
                        } text-lg font-medium -tracking-[0.0225rem]`}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
        <React.Suspense fallback={<Loading />}>
          <main className="w-full flex-[0.6]">{children}</main>
        </React.Suspense>

        <span className="rounded-3xl w-fit h-fit border px-10 py-[1.87rem] border-grey-300 bg-white">
          <Figma className="w-[2.5005rem] h-[3.75rem] " />
        </span>
      </div>
    </PageLayout>
  );
}

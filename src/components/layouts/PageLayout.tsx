import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type IPageLayout = { children: React.ReactNode };
export default function PageLayout({ children }: Readonly<IPageLayout>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

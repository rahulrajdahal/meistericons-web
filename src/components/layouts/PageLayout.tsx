import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

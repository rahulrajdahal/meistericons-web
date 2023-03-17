import * as React from 'react';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <React.Suspense fallback={<Loading />}>
      <Navbar />
      {children}
      <Footer />
    </React.Suspense>
  );
}

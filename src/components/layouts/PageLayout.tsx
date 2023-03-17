import * as React from 'react';
import Loading from '../Loading/Loading';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
}

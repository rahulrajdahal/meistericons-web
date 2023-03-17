import * as React from 'react';

interface IBaseProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export default function Base({ children, ...props }: IBaseProps) {
  return <div {...props}>{children}</div>;
}

Base.defaultProps = {
  children: 'Base',
};

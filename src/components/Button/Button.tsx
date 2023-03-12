import React from 'react';

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: IButtonProps) {
  return <button {...props}>{children}</button>;
}

Button.defaultProps = {};

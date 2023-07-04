import * as React from 'react';

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  // prefix?: React.ReactNode;
  // suffix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  customClasses?: React.CSSProperties | string;
}

export default function Button({
  customClasses,
  size = 'md',
  //  prefix, suffix,
  children,
  ...props
}: IButtonProps) {
  const getSizeClassName = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2';
      case 'md':
        return 'px-6 py-2.5';
      case 'lg':
        return 'px-6 py-3';

      default:
        break;
    }
  }, [size]);

  return (
    <button className={`${customClasses} rounded-lg ${getSizeClassName}`} {...props}>
      {/* {prefix ? prefix : null} */}
      {children}
      {/* {suffix ? suffix : null} */}
    </button>
  );
}

Button.defaultProps = {
  children: 'Button',
  size: 'md',
};

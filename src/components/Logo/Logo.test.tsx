import * as React from 'react';
import Logo from './Logo';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Should render a Base Component', () => {
  it('render Logo component', () => {
    render(<Logo />);
    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
  });
});

import * as React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Should render a Footer Component', () => {
  it('render Footer component', () => {
    render(<Footer />);
    expect(screen.getByTestId(/Footer/i)).toBeInTheDocument();
  });
});

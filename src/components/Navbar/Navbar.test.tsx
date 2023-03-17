import * as React from 'react';
import Navbar from './Navbar';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Should render a Base Component', () => {
  it('render Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByTestId(/Navbar/i)).toBeInTheDocument();
  });
});

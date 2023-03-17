import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Loading from './Loading';

describe('Should render a Loading Component', () => {
  it('render Loading component', () => {
    render(<Loading />);
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
  });
});

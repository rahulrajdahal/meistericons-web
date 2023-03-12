import React from 'react';
import Button from './Button';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Should render a Button', () => {
  const text = 'Button';

  it('render button with a text', () => {
    render(<Button>{text}</Button>);
    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });
});

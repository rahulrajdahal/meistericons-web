import * as React from 'react';
import Base from './Base';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Should render a Base Component', () => {
  const text = 'Base';

  it('render Base component with a text', () => {
    render(<Base>{text}</Base>);
    expect(screen.getByText(/Base/i)).toBeInTheDocument();
  });
});

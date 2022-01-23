import React from 'react';
import { render, screen } from '@testing-library/react';
import Library from './Library';

describe('Library component', () => {
  it('should render correctly', () => {
    render(<Library />);

    expect(screen.getByText('Library')).toHaveTextContent('Library');
  });
});

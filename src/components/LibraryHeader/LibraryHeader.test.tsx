import React from 'react';
import { render, screen } from '@testing-library/react';
import LibraryHeader from './LibraryHeader';

describe('LibraryHeader component', () => {
  it('should render correctly', () => {
    render(<LibraryHeader />);

    expect(screen.getByRole('heading')).toHaveTextContent('Library');
  });
});

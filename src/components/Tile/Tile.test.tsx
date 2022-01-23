/* eslint max-len: ["error", { "code": 150 }] */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tile from './Tile';

const mockProps = {
  id: '1',
  ref: null,
  tile: {
    duration: 28.283098293468356,
    email: 'Hyman.DuBuque@Grady.co.uk',
    firstName: 'Dusty',
    imageUrl:
      'https://images.pexels.com/photos/8422306/pexels-photo-8422306.jpeg',
    lastName: 'Thompson',
    likes: 86,
    thumbnailUrl:
      'https://images.pexels.com/photos/6849263/pexels-photo-6849263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
};

describe('Tile component', () => {
  it('should render correctly', () => {
    render(<Tile {...mockProps} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('0:28')).toBeInTheDocument();
    expect(screen.getByText('86 ❤️')).toBeInTheDocument();
    expect(screen.getByText('Dusty Thompson')).toBeInTheDocument();
  });
});

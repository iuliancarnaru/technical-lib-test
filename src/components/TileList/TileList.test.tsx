/* eslint max-len: ["error", { "code": 150 }] */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorBoundary from '../../utils/ErrorBoundary';
import useFetchData from '../../utils/useFetchData';
import TileList from './TileList';

jest.mock('../../utils/useFetchData');

describe('TileList component', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => jest.clearAllMocks());

  it("displays loading message before data is returned'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: true,
      error: false,
      tiles: [],
      hasMore: true,
    });

    render(<TileList searchTerm="" />);
    expect(screen.getByTestId('loading-progress')).toBeInTheDocument();
  });

  it("displays returned tiles on successful fetch'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      tiles: [
        {
          id: '1sasa233',
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
      ],
      hasMore: true,
    });

    render(<TileList searchTerm="" />);

    expect(screen.getByText('Dusty Thompson')).toBeInTheDocument();

    // TODO: check if modal is in the view when clicking on tile
    const tileContainer = screen.getByTestId('tile-container');
    fireEvent.click(tileContainer);
  });

  it("displays returned error message on unsuccessful fetch'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: false,
      error: true,
      tiles: [],
      hasMore: true,
    });

    render(
      <ErrorBoundary>
        <TileList searchTerm="" />
      </ErrorBoundary>
    );

    // TODO: add a test when we throw an error
    expect(screen.getByText(/Ups something went wrong/i)).toBeInTheDocument();
  });
});

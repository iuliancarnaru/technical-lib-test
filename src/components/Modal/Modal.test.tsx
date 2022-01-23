import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Modal>
        <h1>Modal children</h1>
      </Modal>
    );

    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});

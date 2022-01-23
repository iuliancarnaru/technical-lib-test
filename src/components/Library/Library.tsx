import React, { ReactElement } from 'react';
import ErrorBoundary from '../../utils/ErrorBoundary';
import {
  HeaderContainer,
  HeaderTitle,
} from '../LibraryHeader/LibraryHeader.style';
import TileList from '../TileList';
import { LibrarySection } from './Library.style';

function Library(): ReactElement {
  return (
    <LibrarySection>
      <HeaderContainer>
        <HeaderTitle>Library</HeaderTitle>
      </HeaderContainer>
      <ErrorBoundary>
        <TileList />
      </ErrorBoundary>
    </LibrarySection>
  );
}

export default Library;

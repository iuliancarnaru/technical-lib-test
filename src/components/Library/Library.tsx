import React, { ReactElement, useContext, useState } from 'react';
import { FlagsContext } from '../../App';
import ErrorBoundary from '../../utils/ErrorBoundary';
import LibraryHeader from '../LibraryHeader';
import { HeaderContainer } from '../LibraryHeader/LibraryHeader.style';
import TileList from '../TileList';
import { Input, InputContainer, LibrarySection } from './Library.style';

function Library(): ReactElement {
  const { searchComponentEnabled } = useContext(FlagsContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <LibrarySection>
      <HeaderContainer>
        <LibraryHeader />
        {searchComponentEnabled && (
          <InputContainer>
            <Input
              type="text"
              name="search"
              value={searchTerm}
              placeholder="Search your favorite..."
              onChange={handleInputChange}
            />
          </InputContainer>
        )}
      </HeaderContainer>
      <ErrorBoundary>
        <TileList searchTerm={searchTerm} />
      </ErrorBoundary>
    </LibrarySection>
  );
}

export default Library;

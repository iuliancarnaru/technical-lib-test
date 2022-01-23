import React, { ReactElement } from 'react';
import { Wrapper } from './App.style';
import Library from './components/Library';

function App(): ReactElement {
  return (
    <Wrapper>
      <Library />
    </Wrapper>
  );
}

export default App;

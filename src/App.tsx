import React, { createContext, ReactElement } from 'react';
import { Wrapper } from './App.style';
import Library from './components/Library';
import useGetCurrentFlags from './utils/useGetCurrentFlags';

// create context
export const FlagsContext = createContext({
  searchComponentEnabled: false,
});

function App(): ReactElement {
  const flags = useGetCurrentFlags();

  return (
    <FlagsContext.Provider value={flags}>
      <Wrapper>
        <Library />
      </Wrapper>
    </FlagsContext.Provider>
  );
}

export default App;

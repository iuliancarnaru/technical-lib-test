import { useState, useEffect } from 'react';
import * as LDClient from 'launchdarkly-js-client-sdk';

const useFetchCurrentFlags = (): { searchComponentEnabled: boolean } => {
  const [{ searchComponentEnabled }, setFeatureFlags] = useState({
    searchComponentEnabled: false,
  });

  useEffect(() => {
    const user = {
      key: 'abc123',
    };

    const client = LDClient.initialize('61f1bb240e606d0d55f305d4', user);

    client.on('ready', () => {
      // initialization succeeded, flag values are now available
      const flagValue = client.variation('search-component-enabled', false);

      setFeatureFlags((prevState) => ({
        ...prevState,
        searchComponentEnabled: flagValue,
      }));
    });

    client.on('change', () => {
      const flagValue = client.variation('search-component-enabled', false);

      setFeatureFlags((prevState) => ({
        ...prevState,
        searchComponentEnabled: flagValue,
      }));
    });
  }, []);

  return { searchComponentEnabled };
};

export default useFetchCurrentFlags;

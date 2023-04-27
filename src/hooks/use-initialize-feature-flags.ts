import { useEffect, useState } from 'react';
import LDClient from 'launchdarkly-js-client-sdk';

import { EnvConfig } from '../config/env-config';
import { LDClientConfig } from '../config/ld-client-config';

import type { FeatureFlags } from '../types/feature-flags';

export const useInitializeFeatureFlags = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags | null>(null);
  const [initializationError, setInitializationError] = useState<unknown | null>(null);
  const [isInitializationCompleted, setIsInitializationCompleted] = useState(false);

  useEffect(() => {
    const client = LDClient.initialize(
      process.env[EnvConfig.REACT_APP_LAUNCH_DARKLY_CLIENT_ID] || '',
      LDClientConfig,
    );

    const handleClientReadiness = () => {
      const flags = client.allFlags() as FeatureFlags;
      setIsInitializationCompleted(true);
      setFeatureFlags(flags);
    };

    const awaitInitialization = async () => {
      try {
        await client.waitForInitialization();
        handleClientReadiness();
      } catch (err) {
        setInitializationError(err);
      }
    };

    awaitInitialization();
  }, []);

  return { featureFlags, initializationError, isInitializationCompleted };
};

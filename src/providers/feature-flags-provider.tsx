import React, { FC, PropsWithChildren } from 'react';

import { useInitializeFeatureFlags } from '../hooks/use-initialize-feature-flags';
import { FeatureFlagsContext } from '../contexts/feature-flag-context';
import { PageLoader } from '../components/page-loader';

type Props = PropsWithChildren<{}>;

export const FeatureFlagsProvider: FC<Props> = ({ children }) => {
  const { featureFlags, isInitializationCompleted } = useInitializeFeatureFlags();

  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      {!isInitializationCompleted
        ? <PageLoader />
        : children}
    </FeatureFlagsContext.Provider>
  );
};

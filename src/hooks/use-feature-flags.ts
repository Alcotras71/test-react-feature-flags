import { useContext } from 'react';

import { FeatureFlagsContext } from '../contexts/feature-flag-context';

export const useFeatureFlags = () => useContext(FeatureFlagsContext);

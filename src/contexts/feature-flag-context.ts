import {
  createContext,
} from 'react';

import type { FeatureFlags } from '../types/feature-flags';

export const FeatureFlagsContext = createContext<FeatureFlags | null>(null);

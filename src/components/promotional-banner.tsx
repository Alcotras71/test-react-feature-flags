import React, { FC } from 'react';

import { TestIds } from '../enum/test-ids';
import { LaunchFlags } from '../config/feature-flag-config';
import { useFeatureFlags } from '../hooks/use-feature-flags';

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true
export const PromotionalBanner: FC = (): JSX.Element | null => {
  const featureFlags = useFeatureFlags();

  if (featureFlags?.[LaunchFlags.launchBannerFlagKey] !== true) {
    return null;
  }

  return (
    <div className="promotional-banner" data-testid={TestIds.promotionalBanner}>
      <p>50% launch sale! Use code TAKEHOME</p>
    </div>
  );
};

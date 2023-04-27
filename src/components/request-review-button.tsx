import React from 'react';

import { TestIds } from '../enum/test-ids';
import { LaunchFlags } from '../config/feature-flag-config';
import { useFeatureFlags } from '../hooks/use-feature-flags';

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.
export const RequestReviewButton = () => {
  const featureFlags = useFeatureFlags();

  return (
    <button
      data-testid={TestIds.reviewButton}
      style={{ backgroundColor: featureFlags?.[LaunchFlags.detailsCtaFlagKey] || 'buttonface' }}
      type="button"
    >
      Request doctor review
    </button>
  );
};

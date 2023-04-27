import React, { FC } from 'react';

import { TestIds } from '../enum/test-ids';
import { LaunchFlags } from '../config/feature-flag-config';
import { useMedication } from '../helpers/mock/mock-data';
import { useFeatureFlags } from '../hooks/use-feature-flags';
import { DetailsItem } from './details-item';
import { RequestReviewButton } from './request-review-button';

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     profile-render-details-section
// Setup:
//     Show to users with flag value 'variation'
export const MedicationDetails: FC = (): JSX.Element | null => {
  const featureFlags = useFeatureFlags();

  if (featureFlags?.[LaunchFlags.profileSectionFlagKey] !== 'variation') {
    return null;
  }

  const {
    name, repeatsLeft, instructions, sideEffects, warnings,
  } = useMedication();

  const medicationInfo: Array<[string, string | number]> = [
    ['Medication', name],
    ['Repeats left', repeatsLeft],
    ['Instructions', instructions],
    ['Common side effects', sideEffects],
    ['Warning signs', warnings],
  ];

  return (
    <>
      <h3>Your medication</h3>
      <ul data-testid={TestIds.medicationDetails}>
        {medicationInfo.map(([listName, value]) => (
          <DetailsItem key={`${listName}_${value}`} name={listName} value={value} />
        ))}
      </ul>
      <p>Experiencing any of these? Please contact your doctor</p>
      <RequestReviewButton />
    </>
  );
};

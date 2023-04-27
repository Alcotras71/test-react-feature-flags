import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TestIds } from '../enum/test-ids';
import { MedicationDetails } from '../components/medication-details';
import { generateMockFlags } from '../helpers/mock/generate-mock-flags';
import { mockUseFeatureFlags } from '../helpers/mock/mock-use-typed-flags';

jest.mock('../hooks/use-feature-flags');

describe('MedicationDetails', () => {
  it("should render content when useTypedFlags a profileRenderDetailsSection is a 'variation' value", () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({}));
    const { queryByTestId } = render(<MedicationDetails />);
    expect(queryByTestId(TestIds.medicationDetails)).toBeInTheDocument();
  });

  it(
    "should not render content when a profileRenderDetailsSection from useTypedFlags hook is not a 'variation' value",
    () => {
      mockUseFeatureFlags.mockReturnValue(generateMockFlags({
        profileSectionFlagKey: 'control',
      }));
      const { queryByTestId } = render(<MedicationDetails />);
      expect(queryByTestId(TestIds.medicationDetails)).not.toBeInTheDocument();
    },
  );

  it(
    'should not render content and not show error when '
    + 'a profileRenderDetailsSection from useTypedFlags is an unexpected value',
    () => {
      mockUseFeatureFlags.mockReturnValue(generateMockFlags({
        profileSectionFlagKey: {},
      }));
      const { queryByTestId } = render(<MedicationDetails />);
      expect(queryByTestId(TestIds.medicationDetails)).not.toBeInTheDocument();
    },
  );
});

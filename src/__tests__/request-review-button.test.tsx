import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TestIds } from '../enum/test-ids';
import { generateMockFlags } from '../helpers/mock/generate-mock-flags';
import { mockUseFeatureFlags } from '../helpers/mock/mock-use-typed-flags';
import { RequestReviewButton } from '../components/request-review-button';

jest.mock('../hooks/use-feature-flags');

describe('RequestReviewButton', () => {
  it('should render a button with the specified background color', () => {
    const color = '#1e1ebd';
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({
      detailsCtaFlagKey: color,
    }));
    const { getByTestId } = render(<RequestReviewButton />);
    expect(getByTestId(TestIds.reviewButton)).toHaveStyle(`background-color: ${color}`);
  });

  it('should render a button with the default background color if value is not exist', () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({
      detailsCtaFlagKey: null,
    }));
    const { getByTestId } = render(<RequestReviewButton />);
    expect(getByTestId(TestIds.reviewButton)).toHaveStyle('background-color: buttonface');
  });

  it('should render a button if the value is of an unexpected type', () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({
      detailsCtaFlagKey: { color: 'red' },
    }));
    const { getByTestId } = render(<RequestReviewButton />);
    expect(getByTestId(TestIds.reviewButton)).toBeInTheDocument();
  });
});

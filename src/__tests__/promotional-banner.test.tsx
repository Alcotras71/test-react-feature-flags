import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TestIds } from '../enum/test-ids';
import { generateMockFlags } from '../helpers/mock/generate-mock-flags';
import { mockUseFeatureFlags } from '../helpers/mock/mock-use-typed-flags';
import { PromotionalBanner } from '../components/promotional-banner';

jest.mock('../hooks/use-feature-flags');

describe('PromotionalBanner', () => {
  it('should render content when useTypedFlags a generalRenderLaunchBanner is a true value', () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({}));
    const { queryByTestId } = render(<PromotionalBanner />);
    expect(queryByTestId(TestIds.promotionalBanner)).toBeInTheDocument();
  });

  it('should not render content when useTypedFlags a generalRenderLaunchBanner is a false value', () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({
      launchBannerFlagKey: false,
    }));
    const { queryByTestId } = render(<PromotionalBanner />);
    expect(queryByTestId(TestIds.promotionalBanner)).not.toBeInTheDocument();
  });

  it('should not render content when useTypedFlags '
    + 'a generalRenderLaunchBanner is an unexpected value', () => {
    mockUseFeatureFlags.mockReturnValue(generateMockFlags({
      launchBannerFlagKey: { test: 123 },
    }));
    const { queryByTestId } = render(<PromotionalBanner />);
    expect(queryByTestId(TestIds.promotionalBanner)).not.toBeInTheDocument();
  });
});

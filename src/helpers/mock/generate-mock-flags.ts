import { FeatureFlags } from '../../types/feature-flags';
import { LaunchFlags } from '../../config/feature-flag-config';
import { MockFeatureFlagsKeys } from '../../types/mock-feature-flags';

export const generateMockFlags = (
  {
    profileSectionFlagKey = 'variation',
    detailsCtaFlagKey = 'blue',
    launchBannerFlagKey = true,
  }: Partial<Record<MockFeatureFlagsKeys, any>>,
): FeatureFlags => ({
  [LaunchFlags.profileSectionFlagKey]: profileSectionFlagKey,
  [LaunchFlags.detailsCtaFlagKey]: detailsCtaFlagKey,
  [LaunchFlags.launchBannerFlagKey]: launchBannerFlagKey,
});

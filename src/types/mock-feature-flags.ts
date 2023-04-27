import { FeatureFlags } from './feature-flags';
import { LaunchFlags } from '../config/feature-flag-config';

export type MockFeatureFlags = {
  profileSectionFlagKey: FeatureFlags[LaunchFlags.profileSectionFlagKey],
  detailsCtaFlagKey: FeatureFlags[LaunchFlags.detailsCtaFlagKey],
  launchBannerFlagKey: FeatureFlags[LaunchFlags.launchBannerFlagKey]
};

export type MockFeatureFlagsKeys = keyof MockFeatureFlags;

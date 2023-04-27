import { LaunchFlags } from '../config/feature-flag-config';

export interface FeatureFlags {
  [LaunchFlags.detailsCtaFlagKey]: string,
  [LaunchFlags.launchBannerFlagKey]: boolean,
  [LaunchFlags.profileSectionFlagKey]: 'not-enrolled' | 'control' | 'variation'
}

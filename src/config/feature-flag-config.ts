/**
 * These are feature flags contained within our LaunchDarkly project
 */

export enum LaunchFlags {
  /**
   * Controls: Showing a promotional launch banner at the top of the page layout
   * Returns: true/false
   * Show when: If returns 'true'
   */
  launchBannerFlagKey = 'general-render-launch-banner',

  /**
   * Controls: Rendering a details section on the dashboard screen
   * Returns: not-enrolled, control, variation
   * Show when: Returns 'variation'
   */
  profileSectionFlagKey = 'profile-render-details-section',

  /**
   * Controls: The colour of the detail section CTA
   * Returns: hex colour
   * Show when: Always, colour is based on flag value.
   */
  detailsCtaFlagKey = 'details-section-cta-colour',
}

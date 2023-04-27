import { useFeatureFlags } from '../../hooks/use-feature-flags';

export const mockUseFeatureFlags = useFeatureFlags as jest.MockedFunction<typeof useFeatureFlags>;

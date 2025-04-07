// scripts/featureFlag.js
export function getFeatureFlags() {
  return {
    dev: window.location.search.includes('ritual=dev')
    // Additional flags can be added here
  };
}

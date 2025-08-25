/**
 * Dakota: Small, accessible loading indicator we’ll use once APIs exist.
 */
export default function LoadingDots() {
  return <span role="status" aria-live="polite" aria-label="Loading">• • •</span>;
}

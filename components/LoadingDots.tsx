/**
 * Dakota: Accessible loading indicator for pending states.
 */
export default function LoadingDots() {
  return <span role="status" aria-live="polite" aria-label="Loading">• • •</span>;
}

/**
 * Dakota: UI notes for this checkpoint.
 */
export default function DocsPage() {
  return (
    <main className="panel">
      <h1>03-03 Notes — Building the FAQ Bot UI</h1>
      <ul>
        <li>UI uses RTK Query hooks end-to-end</li>
        <li>Search filters client-side for now</li>
        <li>Chat uses a mutation that returns a canned answer</li>
        <li>Next chapter we point the slice to real /api routes</li>
      </ul>
    </main>
  );
}

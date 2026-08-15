/** Renders one or more JSON-LD graphs as a single script tag. */
export function JsonLd({ data }: { data: object[] }) {
  return (
    <script
      type="application/ld+json"
      // Serialised from local content modules only — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

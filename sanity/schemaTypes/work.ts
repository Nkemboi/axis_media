export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    { name: "client", title: "Client name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "client" }, validation: (Rule: any) => Rule.required() },
    { name: "quarter", title: "Quarter", type: "string", description: "e.g. Q3 2026" },
    { name: "date", title: "Date", type: "date" },
    { name: "summary", title: "Summary", type: "text", rows: 2 },
    { name: "description", title: "Description", type: "text", rows: 6 },
    { name: "raised", title: "Highlight stat", type: "string", description: "e.g. Raised £6.5m Seed" },
    { name: "comingSoon", title: "Coming soon?", type: "boolean" },
    { name: "image", title: "Cover image", type: "image", options: { hotspot: true } },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
  ],
};

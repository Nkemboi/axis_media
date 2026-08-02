export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (Rule: any) => Rule.required() },
    { name: "shortDescription", title: "Short description", type: "string" },
    { name: "description", title: "Full description", type: "text", rows: 5 },
    { name: "deliverables", title: "Deliverables", type: "array", of: [{ type: "string" }] },
    { name: "order", title: "Display order", type: "number" },
  ],
};

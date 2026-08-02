export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule: any) => Rule.required() },
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "logo", title: "Company logo", type: "image" },
  ],
};

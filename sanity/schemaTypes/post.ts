export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule: any) => Rule.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "text", rows: 10 },
    { name: "date", title: "Published date", type: "date" },
  ],
};

import { Rule } from "sanity";

export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validate: (Rule: Rule) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validate: (Rule: Rule) => Rule.required(),
    },
    {
      name: "organization",
      title: "Organization",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              validate: (Rule: Rule) => Rule.required(),
            },
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              validate: (Rule: Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "array",
              title: "Description",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Start Date, Most Recent",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
};

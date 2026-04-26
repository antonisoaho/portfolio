import { defineField, defineType } from "sanity";

export const homeWorkType = defineType({
  name: "homeWork",
  title: "Home Work Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(80),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (rule) => rule.required().min(8).max(140),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "Upcoming", value: "upcoming" },
        ],
        layout: "radio",
      },
      initialValue: "live",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "wip",
      title: "Work in progress",
      type: "boolean",
      description:
        "Shows a WIP bar on the card when the product is still being finished.",
      initialValue: false,
    }),
    defineField({
      name: "href",
      title: "Website URL",
      type: "url",
      description: "Required for live cards. Leave empty for upcoming projects.",
      validation: (rule) =>
        rule.custom((value, context) => {
          const status = context.document?.status;
          if (status === "live" && !value) {
            return "Live projects must have a website URL.";
          }
          return true;
        }),
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Large (2x2)", value: "col-span-2 row-span-2" },
          { title: "Wide (2x1)", value: "col-span-2 row-span-1" },
          { title: "Default (1x1)", value: "col-span-1 row-span-1" },
        ],
      },
      initialValue: "col-span-1 row-span-1",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tone",
      title: "Glow Tone",
      type: "string",
      description: "Tailwind gradient class fragment used by the card overlay.",
      options: {
        list: [
          { title: "Cyan + Violet", value: "from-cyan/45 via-violet/15 to-transparent" },
          { title: "Violet", value: "from-violet/45 via-violet/10 to-transparent" },
          { title: "Cyan", value: "from-cyan/35 via-cyan/10 to-transparent" },
          { title: "Violet + Cyan", value: "from-violet/35 via-cyan/20 to-transparent" },
          { title: "Balanced", value: "from-cyan/25 via-violet/25 to-transparent" },
        ],
      },
      initialValue: "from-cyan/25 via-violet/25 to-transparent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "number",
      description: "Lower number appears first in the grid.",
      validation: (rule) => rule.required().min(0),
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      status: "status",
      wip: "wip",
      media: "image",
    },
    prepare({ title, subtitle, status, wip, media }) {
      const statusTag =
        status === "upcoming" ? "Upcoming" : wip ? "WIP" : "Live";
      return {
        title,
        subtitle: `${statusTag} · ${subtitle ?? ""}`,
        media,
      };
    },
  },
});

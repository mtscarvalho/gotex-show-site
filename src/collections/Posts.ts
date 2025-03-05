import { revalidatePath } from "next/cache";

import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  hooks: {
    afterChange: [
      ({ operation }) => {
        if (operation === "update") {
          revalidatePath("/", "layout");
        }
      },
    ],
    afterRead: [
      ({ doc }) => {
        doc.permalink = `${process.env.SITE_URL}/noticias/${doc.slug}`;
        doc.relPermalink = `/noticias/${doc.slug}`;
        return doc;
      },
    ],
  },
  fields: [
    slugField(),
    {
      name: "permalink",
      type: "text",
      hidden: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd/MM/yyyy",
        },
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};

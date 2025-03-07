import { Field } from "payload";
import { formatSlug } from "@/lib/payload";

export const slugField = (): Field => ({
  name: "slug",
  type: "text",
  unique: true,
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeChange: [formatSlug()],
  },
});

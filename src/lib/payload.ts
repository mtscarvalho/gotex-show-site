import { FieldHook } from "payload";

export const formatSlug = (): FieldHook => {
  return ({ data, originalDoc }) => {
    if (data?.title) {
      return (
        data.slug ||
        data.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      );
    }
    return originalDoc?.slug;
  };
};

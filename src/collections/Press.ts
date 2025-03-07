import type { CollectionConfig } from "payload";

export const Press: CollectionConfig = {
  slug: "press",
  labels: {
    singular: "Press",
    plural: "Press",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "edition",
      type: "select",
      required: true,
      options: [
        {
          label: "11ª edição (2025)",
          value: "2025",
        },
        {
          label: "10ª edição (2024)",
          value: "2024",
        },
        {
          label: "9ª edição (2023)",
          value: "2023",
        },
        {
          label: "8ª edição (2022)",
          value: "2022",
        },
        {
          label: "7ª edição (2019)",
          value: "2021",
        },
        {
          label: "5ª edição (2017)",
          value: "2019",
        },
      ],
    },
    {
      name: "url",
      type: "text",
      required: true,
      validate: (value: string | undefined | null) => {
        if (value && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(value)) {
          return "Please enter a valid URL.";
        }
        return true;
      },
    },
  ],
};

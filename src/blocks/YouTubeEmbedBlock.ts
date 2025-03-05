import { isValidYouTubeUrl } from "@/lib/utils";
import { Block } from "payload";

export const YouTubeEmbedBlock: Block = {
  slug: "youtubeEmbed",
  fields: [
    {
      name: "url",
      type: "text",
      label: "YouTube Video URL",
      required: true,
      validate: (value: string | undefined | null) => {
        if (value && !isValidYouTubeUrl(value)) {
          return "Invalid YouTube URL. Please provide a valid YouTube URL.";
        }
        return true;
      },
    },
    {
      name: "title",
      type: "text",
      label: "YouTube Video Title",
      required: true,
    },
  ],
};

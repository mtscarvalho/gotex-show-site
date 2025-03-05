import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { buildConfig } from "payload";
import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Press } from "./collections/Press";
import { Posts } from "./collections/Posts";

import { YouTubeEmbedBlock } from "./blocks/YouTubeEmbedBlock";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Press, Posts],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [YouTubeEmbedBlock],
      }),
    ],
  }),
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Português",
        code: "pt-br",
      },
    ],
    defaultLocale: "pt-br",
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      collections: ["posts"],
      generateTitle: ({ doc }) => `${doc.title} | Gotex Show`,
      generateDescription: ({ doc }) => `${doc.content.root.children[0].children[0].text.split(/\s+/).slice(0, 20).join(" ")}... Leia mais!`,
      generateURL: ({ doc }) => `${process.env.SITE_URL}/noticias/${doc?.slug}`,
    }),
  ],
});

import { Post, Press } from "@/payload-types";
import config from "@payload-config";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { cache } from "react";

const payload = await getPayload({ config });

/**
 * Fetches all press from Payload and groups them by edition
 * @returns {Promise<Record<string, Partial<Press>[]>}
 */

export const fetchPress = async (): Promise<Record<string, Partial<Press>[]>> => {
  const { docs } = await payload.find({
    collection: "press",
    sort: "-edition",
  });

  return docs.reduce(
    (acc, item) => {
      if (!item.edition) return acc;
      if (!acc[item.edition]) acc[item.edition] = [];
      acc[item.edition].push(item);
      return acc;
    },
    {} as Record<string, Partial<Press>[]>,
  );
};

/**
 * Fetches a single post from Payload
 * @param {string} slug - The slug of the event to fetch
 * @returns {Promise<Event>}
 */

export const fetchPost = cache(async (slug: string): Promise<Post> => {
  const { isEnabled: draft } = await draftMode();

  const data = await payload.find({
    collection: "posts",
    depth: 1,
    draft,
    limit: 1,
    where: {
      and: [
        { slug: { equals: slug } },
        ...(draft
          ? []
          : [
              {
                _status: {
                  equals: "published",
                },
              },
            ]),
      ],
    },
  });

  return data.docs[0];
});

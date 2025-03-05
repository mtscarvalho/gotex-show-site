import { Press } from "@/payload-types";
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

export const fetchPress = async (): Promise<Record<string, Partial<Press>[]>> => {
  const { docs } = await payload.find({
    collection: "press",
    sort: "-edition",
  });

  // Group by edition
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

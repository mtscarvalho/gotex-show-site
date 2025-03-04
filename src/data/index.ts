import { Press } from "@/payload-types";
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

export const press = payload.find({
  collection: "press",
});

export const fetchPress = async (): Promise<Partial<Press>[]> => {
  const data = await payload.find({
    collection: "press",
  });
  return data.docs;
};

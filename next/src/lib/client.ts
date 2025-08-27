import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wbp5gkpg",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: true,
});

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-pra",
  apiKey: process.env.API_KEY,
});

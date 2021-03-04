import { schemaComposer } from "graphql-compose";
import domino from "domino";
import fetch from "node-fetch";
const { getMetadata } = require("page-metadata-parser");

const imageFromUrlResolver = schemaComposer.createResolver({
  name: "imageFromUrl",
  type: `type Metadata { image: String }`,
  args: {
    _url: "String!",
  },
  resolve: async ({ args }) => {
    if (typeof args._url === "string") {
      const response = await fetch(args._url);
      const html = await response.text();
      const doc = domino.createWindow(html).document;
      const metadata = getMetadata(doc, args._url);
      return { image: metadata.image };
    }
    return { image: "" };
  },
});

export { imageFromUrlResolver };

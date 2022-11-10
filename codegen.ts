import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev).combinedEnv;

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
          },
        },
    },
  ],
  ignoreNoDocuments: true,
  documents: ["pages/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const SANITY_DATASET = process.env.REACT_APP_SANITY_DATASET as string;
const SANITY_PROJECT_ID = process.env.REACT_APP_SANITY_PROJECT_ID as string;

const clientConfig = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-03-10',
};

export const client =
  SANITY_DATASET && SANITY_PROJECT_ID ? createClient(clientConfig) : undefined;

const urlBuilder = imageUrlBuilder(client);

export const imageSource = (source: string) => {
  return urlBuilder.image(source);
};

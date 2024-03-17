import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

import { SANITY_DATASET, SANITY_PROJECT_ID } from '../data/constants';

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

import { config } from 'dotenv';
config();

// Function to validate the image size for DALL-E 3 models
export function validateSize(size) {
  const validSizes = ['1024x1024', '1792x1024', '1024x1792'];
  if (!validSizes.includes(size)) {
    throw new Error(`Invalid image size. Valid sizes are: ${validSizes.join(', ')}.`);
  }
  return size;
}
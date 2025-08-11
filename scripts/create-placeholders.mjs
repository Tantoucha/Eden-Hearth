#!/usr/bin/env node

import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const imagesDir = join(projectRoot, 'public', 'images');

async function createPlaceholders() {
  // Create kitchen placeholder
  const kitchenBuffer = await sharp({
    create: {
      width: 1920,
      height: 1280,
      channels: 3,
      background: { r: 15, g: 46, b: 29 }
    }
  })
  .png()
  .toBuffer();

  await sharp(kitchenBuffer)
    .jpeg({ quality: 85 })
    .toFile(join(imagesDir, 'kitchen-master.jpg'));

  // Create garden placeholder
  const gardenBuffer = await sharp({
    create: {
      width: 1920,
      height: 1280,
      channels: 3,
      background: { r: 76, g: 102, b: 58 }
    }
  })
  .png()
  .toBuffer();

  await sharp(gardenBuffer)
    .jpeg({ quality: 85 })
    .toFile(join(imagesDir, 'garden-master.jpg'));

  console.log('✅ Created placeholder master images');
  console.log('   📝 Replace kitchen-master.jpg and garden-master.jpg with your actual photos');
}

createPlaceholders().catch(console.error);

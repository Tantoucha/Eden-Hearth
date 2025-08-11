#!/usr/bin/env node

import sharp from 'sharp';
import { readdir, access } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const imagesDir = join(projectRoot, 'public', 'images');

const sizes = [1920, 1280, 960];
const quality = 78;

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function processImages() {
  try {
    const files = await readdir(imagesDir);
    const masterFiles = files.filter(file => 
      file.endsWith('-master.jpg') && extname(file) === '.jpg'
    );

    if (masterFiles.length === 0) {
      console.log('No *-master.jpg files found in /public/images/');
      return;
    }

    for (const masterFile of masterFiles) {
      const baseName = basename(masterFile, '-master.jpg');
      const masterPath = join(imagesDir, masterFile);
      
      console.log(`Processing ${masterFile}...`);

      for (const size of sizes) {
        const outputName = `${baseName}-${size}.jpg`;
        const outputPath = join(imagesDir, outputName);
        
        if (await fileExists(outputPath)) {
          console.log(`  ✓ ${outputName} already exists, skipping`);
          continue;
        }

        await sharp(masterPath)
          .resize(size, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ 
            quality,
            progressive: true,
            colorSpace: 'srgb'
          })
          .toFile(outputPath);
        
        console.log(`  ✓ Created ${outputName} (${size}px wide)`);
      }
    }
    
    console.log('✅ Hero image processing complete');
  } catch (error) {
    console.error('❌ Error processing images:', error.message);
    process.exit(1);
  }
}

processImages();

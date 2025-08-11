#!/usr/bin/env node

import { copyFile, mkdir } from 'fs/promises';
import { access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const targetPath = join(projectRoot, 'public', 'video', 'eden-hearth-promo.mp4');

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function copyPromoVideo() {
  // Potential source paths in order of preference
  const sourcePaths = [
    process.env.PROMO_SRC, // Custom path via environment variable
    join(homedir(), 'Downloads', 'eden-hearth-promo.mp4'), // Cross-platform Downloads
    join(process.env.USERPROFILE || homedir(), 'Downloads', 'eden-hearth-promo.mp4') // Windows fallback
  ].filter(Boolean); // Remove undefined values

  let sourceFound = null;
  
  // Check each potential source
  for (const sourcePath of sourcePaths) {
    if (await fileExists(sourcePath)) {
      sourceFound = sourcePath;
      break;
    }
  }

  if (!sourceFound) {
    console.log('❌ eden-hearth-promo.mp4 not found in Downloads folder.');
    console.log('');
    console.log('Please either:');
    console.log('  1) Move/drag the file to: /public/video/eden-hearth-promo.mp4');
    console.log('  2) Or run with custom path:');
    console.log('     PROMO_SRC="/full/path/to/eden-hearth-promo.mp4" npm run add:promo');
    return;
  }

  try {
    // Ensure target directory exists
    await mkdir(dirname(targetPath), { recursive: true });
    
    // Copy the file
    await copyFile(sourceFound, targetPath);
    
    console.log('✅ Successfully copied promotional video');
    console.log(`   From: ${sourceFound}`);
    console.log(`   To:   ${targetPath}`);
  } catch (error) {
    console.error('❌ Error copying video:', error.message);
    process.exit(1);
  }
}

copyPromoVideo();

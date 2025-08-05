import sharp from 'sharp';
import { readdir, mkdir, stat, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '..', 'assets', 'images');
const outputDir = path.join(__dirname, '..', 'public', 'images-optimized');

const supportedExtensions = /\.(jpe?g|png)$/i;

async function optimizeImagesRecursively(currentInputDir, currentOutputDir) {
  const entries = await readdir(currentInputDir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(currentInputDir, entry.name);
    const outputPath = path.join(currentOutputDir, entry.name);

    if (entry.isDirectory()) {
      await mkdir(outputPath, { recursive: true });
      await optimizeImagesRecursively(inputPath, outputPath);
    } else if (entry.isFile() && supportedExtensions.test(entry.name)) {
      const newOutputPath = outputPath.replace(supportedExtensions, '.webp');

      await sharp(inputPath)
        .rotate()
        .resize({ width: 1200, withoutEnlargement: true }) // optional: set max width
        .webp({ quality: 75 })
        .toFile(newOutputPath);

      console.log(`✅ Optimized: ${path.relative(inputDir, inputPath)}`);
    }
  }
}

await mkdir(outputDir, { recursive: true });
await optimizeImagesRecursively(inputDir, outputDir);

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const assetsDir = join(rootDir, 'src', 'assets');
const publicDir = join(rootDir, 'public', 'images');

// Extensiones de imagen soportadas
const imageExtensions = ['.png', '.jpg', '.jpeg', '.JPG', '.PNG', '.JPEG'];

async function isImageFile(filePath) {
  const ext = extname(filePath);
  return imageExtensions.includes(ext);
}

async function getAllImages(dir, baseDir = dir) {
  const images = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    let relativePath = fullPath.replace(baseDir + '/', '');
    
    // Si la ruta relativa comienza con "images/", quitarlo para evitar duplicación
    if (relativePath.startsWith('images/')) {
      relativePath = relativePath.replace('images/', '');
    }

    if (entry.isDirectory()) {
      const subImages = await getAllImages(fullPath, baseDir);
      images.push(...subImages);
    } else if (entry.isFile() && await isImageFile(fullPath)) {
      images.push({
        input: fullPath,
        relative: relativePath,
      });
    }
  }

  return images;
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await stat(inputPath);
    const ext = extname(inputPath).toLowerCase();
    
    // Crear directorio de salida si no existe
    await mkdir(dirname(outputPath), { recursive: true });

    let sharpInstance = sharp(inputPath);

    // Optimizar según el tipo de imagen
    if (ext === '.png') {
      // Para PNG, convertir a WebP con compresión
      await sharpInstance
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath.replace(/\.png$/i, '.webp'));
      
      // También crear una versión PNG optimizada
      await sharpInstance
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      // Para JPG, convertir a WebP y optimizar JPG
      await sharpInstance
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath.replace(/\.(jpg|jpeg)$/i, '.webp'));
      
      await sharpInstance
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath);
    }

    const optimizedStats = await stat(outputPath);
    const saved = ((1 - optimizedStats.size / stats.size) * 100).toFixed(2);
    
    console.log(`✓ Optimizado: ${basename(inputPath)} (${saved}% reducción)`);
  } catch (error) {
    console.error(`✗ Error optimizando ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Iniciando optimización de imágenes...\n');

  try {
    // Obtener todas las imágenes
    const images = await getAllImages(assetsDir);

    if (images.length === 0) {
      console.log('No se encontraron imágenes para optimizar.');
      return;
    }

    console.log(`Encontradas ${images.length} imagen(es) para optimizar.\n`);

    // Optimizar cada imagen
    for (const image of images) {
      const outputPath = join(publicDir, image.relative);
      await optimizeImage(image.input, outputPath);
    }

    console.log(`\n✅ Optimización completada! Imágenes guardadas en: ${publicDir}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();


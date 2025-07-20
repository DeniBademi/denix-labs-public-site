import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Netlify build process...');

try {
  // Clean the dist directory
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Build Bulgarian locale
  console.log('📦 Building Bulgarian locale...');
  execSync('ng build --configuration=production-bg', { stdio: 'inherit' });

  // Build English locale
  console.log('📦 Building English locale...');
  execSync('ng build --configuration=production-en', { stdio: 'inherit' });

  // The Angular Universal build creates the structure we need
  // We need to move the browser files to the correct locations
  const finalOutputDir = 'dist/public-site/browser';

  // Move Bulgarian files from browser/en/bg to /bg
  const bgSourceDir = path.join(finalOutputDir, 'browser', 'en', 'bg');
  const bgTargetDir = path.join(finalOutputDir, 'bg');

  if (fs.existsSync(bgSourceDir)) {
    if (fs.existsSync(bgTargetDir)) {
      fs.rmSync(bgTargetDir, { recursive: true, force: true });
    }
    fs.renameSync(bgSourceDir, bgTargetDir);
  }

  // Move English files from browser/en/en to /en
  const enSourceDir = path.join(finalOutputDir, 'browser', 'en', 'en');
  const enTargetDir = path.join(finalOutputDir, 'en');

  if (fs.existsSync(enSourceDir)) {
    if (fs.existsSync(enTargetDir)) {
      fs.rmSync(enTargetDir, { recursive: true, force: true });
    }
    fs.renameSync(enSourceDir, enTargetDir);
  }

  // Copy static assets to both locale directories
  const copyAssets = (sourceDir, targetDir) => {
    if (fs.existsSync(sourceDir)) {
      const files = fs.readdirSync(sourceDir);
      files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        if (fs.statSync(sourcePath).isFile()) {
          // Copy CSS, JS, and other static files
          if (file.endsWith('.css') || file.endsWith('.js') ||
              file.endsWith('.png') || file.endsWith('.jpg') ||
              file.endsWith('.svg') || file.endsWith('.webp') ||
              file.endsWith('.ttf') || file.endsWith('.woff') ||
              file.endsWith('.woff2') || file.endsWith('.ico')) {
            fs.copyFileSync(sourcePath, targetPath);
          }
        } else if (fs.statSync(sourcePath).isDirectory()) {
          // Copy directories (fonts, icons, logos, js)
          if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
          }
          const copyDir = (src, dst) => {
            const items = fs.readdirSync(src);
            items.forEach(item => {
              const srcPath = path.join(src, item);
              const dstPath = path.join(dst, item);

              if (fs.statSync(srcPath).isFile()) {
                fs.copyFileSync(srcPath, dstPath);
              } else if (fs.statSync(srcPath).isDirectory()) {
                if (!fs.existsSync(dstPath)) {
                  fs.mkdirSync(dstPath, { recursive: true });
                }
                copyDir(srcPath, dstPath);
              }
            });
          };
          copyDir(sourcePath, targetPath);
        }
      });
    }
  };

  // Copy assets from the browser/en directory to both locale directories
  const browserEnDir = path.join(finalOutputDir, 'browser', 'en');
  copyAssets(browserEnDir, bgTargetDir);
  copyAssets(browserEnDir, enTargetDir);

  // Clean up the nested browser directory
  const browserDir = path.join(finalOutputDir, 'browser');
  if (fs.existsSync(browserDir)) {
    fs.rmSync(browserDir, { recursive: true, force: true });
  }

  // Create a simple index.html in the root that redirects to Bulgarian
  const redirectHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0;url=/bg/">
</head>
<body>
    <p>Redirecting to <a href="/bg/">Bulgarian version</a>...</p>
</body>
</html>`;

  fs.writeFileSync(path.join(finalOutputDir, 'index.html'), redirectHtml);

  console.log('✅ Build completed successfully!');
  console.log('📁 Output directory: dist/public-site/browser');
  console.log('🌐 Bulgarian version: /bg/');
  console.log('🌐 English version: /en/');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
# Product Image Extraction Guide

## Overview

This guide explains how to extract and optimize product images from your PDF catalogues for use on the website.

## Prerequisites

- PDF catalogues: Catalouge I.pdf, Catalouge II.pdf, Catalouge III.pdf, Catalouge IV.pdf
- Image extraction tool (Adobe Acrobat, pdf2image Python library, or online tools)
- Image optimization tool (ImageMagick, Sharp, or online services)

## Step 1: Extract Images from PDFs

### Option A: Using Adobe Acrobat Pro

1. Open each catalogue PDF in Adobe Acrobat Pro
2. Go to Tools → Export PDF → Image → JPEG or PNG
3. Choose "Extract All Images" option
4. Save to a temporary folder

### Option B: Using Python (pdf2image)

\`\`\`bash
# Install dependencies
pip install pdf2image Pillow

# Extract images script
python extract_images.py
\`\`\`

```python
# extract_images.py
from pdf2image import convert_from_path
import os

catalogues = [
    'Catalouge I.pdf',
    'Catalouge II.pdf',
    'Catalouge III.pdf',
    'Catalouge IV.pdf'
]

for catalogue in catalogues:
    pages = convert_from_path(catalogue, dpi=200)
    catalogue_name = catalogue.replace('.pdf', '').replace(' ', '_')
    
    for i, page in enumerate(pages):
        page.save(f'temp_images/{catalogue_name}_page_{i+1}.jpg', 'JPEG')
```

### Option C: Using Online Tools

1. Visit https://www.ilovepdf.com/pdf_to_jpg
2. Upload each catalogue PDF
3. Download extracted images

## Step 2: Organize and Rename Images

Create a folder structure:

\`\`\`
public/products/
├── wire-cables/
│   ├── gold-auto-cables-30swg.jpg
│   ├── gold-auto-cables-30swg-1.0mm.jpg
│   ├── gold-thin-pvc-avs.jpg
│   └── ...
├── brass-terminals/
│   ├── ring-terminal-la103.jpg
│   ├── ring-terminal-la103-small.jpg
│   ├── ring-terminal-la103-big.jpg
│   └── ...
├── battery-cable-sets/
├── switches/
└── ...
\`\`\`

Naming convention:
- Use product slug from `products.config.ts`
- Use lowercase with hyphens
- Add variant suffix for variant-specific images
- Example: `ring-terminal-la103-small.jpg`

## Step 3: Optimize Images

### Recommended Settings

- **Format**: WebP (with JPEG fallback)
- **Thumbnail size**: 400x400px
- **Full size**: 1200x1200px
- **Quality**: 85%
- **Compression**: Lossless for technical diagrams, lossy for photos

### Using Sharp (Node.js)

\`\`\`bash
npm install sharp
\`\`\`

```javascript
// optimize_images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  // Generate thumbnail
  await sharp(inputPath)
    .resize(400, 400, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}-thumb.webp`));
  
  // Generate full size
  await sharp(inputPath)
    .resize(1200, 1200, { fit: 'inside' })
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, `${filename}.webp`));
  
  // JPEG fallback
  await sharp(inputPath)
    .resize(1200, 1200, { fit: 'inside' })
    .jpeg({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}.jpg`));
}
```

### Using ImageMagick (Command Line)

\`\`\`bash
# Convert to WebP with optimization
magick input.jpg -resize 1200x1200 -quality 85 output.webp

# Generate thumbnail
magick input.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 thumb.jpg
\`\`\`

## Step 4: Update Product Configuration

Update `config/products.config.ts` with image paths:

\`\`\`typescript
{
  id: "wire-1",
  name: "Gold Auto Cables (30 SWG)",
  slug: "gold-auto-cables-30swg",
  image: "/products/wire-cables/gold-auto-cables-30swg.jpg",
  images: [
    "/products/wire-cables/gold-auto-cables-30swg.jpg",
    "/products/wire-cables/gold-auto-cables-30swg-detail.jpg"
  ],
  variants: [
    {
      id: "gac-30swg-1.0",
      code: "GAC-30SWG-1.0",
      name: "1.00 sq mm",
      images: ["/products/wire-cables/gold-auto-cables-30swg-1.0mm.jpg"],
      // ...
    }
  ]
}
\`\`\`

## Step 5: Update Components to Use Images

### ProductCard Component

\`\`\`typescript
import Image from "next/image";

// Replace placeholder icon with image
{product.image ? (
  <Image
    src={product.image}
    alt={product.name}
    width={400}
    height={400}
    className={styles.productImage}
  />
) : (
  <span className={styles.productIcon}>📦</span>
)}
\`\`\`

### Product Detail Page

\`\`\`typescript
// Image gallery with thumbnails
<div className={styles.imageGallery}>
  <div className={styles.mainImage}>
    <Image
      src={selectedImage}
      alt={product.name}
      width={1200}
      height={1200}
      priority
    />
  </div>
  <div className={styles.thumbnails}>
    {product.images?.map((img, i) => (
      <button
        key={i}
        onClick={() => setSelectedImage(img)}
        className={selectedImage === img ? styles.active : ''}
      >
        <Image src={img} alt="" width={100} height={100} />
      </button>
    ))}
  </div>
</div>
\`\`\`

## Step 6: Performance Optimization

### Next.js Image Optimization

The Next.js `<Image>` component automatically:
- Lazy loads images
- Serves optimized formats (WebP, AVIF)
- Generates multiple sizes
- Provides placeholder blurs

### Configure next.config.js

\`\`\`javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
\`\`\`

## Checklist

- [ ] Extract images from all 4 catalogues
- [ ] Organize images by product category
- [ ] Rename images to match product slugs
- [ ] Generate thumbnails (400x400px)
- [ ] Generate full-size images (1200x1200px)
- [ ] Convert to WebP format
- [ ] Create JPEG fallbacks
- [ ] Update products.config.ts with image paths
- [ ] Update ProductCard component to use images
- [ ] Update ProductDetailView to show image gallery
- [ ] Test image loading performance
- [ ] Verify all images display correctly

## Tools & Resources

- **PDF to Image Converters**:
  - Adobe Acrobat Pro
  - [ILovePDF](https://www.ilovepdf.com/pdf_to_jpg)
  - [Smallpdf](https://smallpdf.com/pdf-to-jpg)

- **Image Optimization**:
  - [Squoosh](https://squoosh.app/)
  - [TinyPNG](https://tinypng.com/)
  - Sharp (Node.js)
  - ImageMagick

- **Bulk Renaming**:
  - [Bulk Rename Utility](https://www.bulkrenameutility.co.uk/) (Windows)
  - [Name Changer](https://mrrsoftware.com/namechanger/) (Mac)
  - `rename` command (Linux)

## Estimated Time

- Image Extraction: 2-3 hours
- Organization & Renaming: 3-4 hours
- Optimization: 2-3 hours
- Integration: 2-3 hours
- **Total**: 9-13 hours

## Notes

- Start with one category to test the workflow
- Keep original PDFs as backup
- Document any special cases or exceptions
- Consider using a CDN for image delivery in production

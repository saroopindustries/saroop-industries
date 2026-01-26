# Product Images Setup

## Folder Structure Created

Product images are organized by category in `/public/products/`:

```
/public/products/
├── wire-cables/
├── brass-terminal/
├── electrical-components/
├── holders-connectors/
├── fuse-boxes/
├── battery-accessories/
├── fuses/
├── terminal-caps/
├── cable-management/
├── heat-shrink-sleeves/
├── universal-holders/
├── fuse-boxes-complete/
├── jcb-connectors/
├── headlight-wiring/
├── special-universal-connectors/
├── ecm-connectors/
├── jointer-holders-relay/
├── flasher-relay-base/
├── sensor-lamp-holders/
├── round-connectors/
└── special-holders/
```

## Wire & Cables Images Updated

All 9 Wire & Cables products now have image paths configured:

1. **gold-auto-cables-30swg.png** - Gold Auto Cables (30 SWG)
2. **gold-thin-pvc-avs.png** - Gold Thin PVC (AVS Type)
3. **silver-wire-031swg.png** - Silver Wire (031 SWG)
4. **export-thin-036swg.png** - Export Thin Wire (036 SWG)
5. **premium-wire-034swg.png** - Premium Wire (034 SWG)
6. **premium-thin-034swg.png** - Premium Thin Wire (034 SWG)
7. **speaker-wire.png** - Speaker Wire
8. **oe-battery-cables.png** - OE Type Battery Cables
9. **aftermarket-battery-cables.png** - After Market Battery Cables

## Image Requirements

- **Size**: 800x800px (square) or 1200x800px (3:2 ratio)
- **Format**: PNG (preferred) or JPG
- **Background**: White or transparent
- **Quality**: High resolution, optimized for web

## Where Images Appear

1. **Product Listing Page** (`/products`):
   - Grid view with product cards
   - Image shown in card header
   - If multiple images exist, Swiper carousel with dots

2. **Category Page** (`/products/[category-slug]`):
   - Featured products section
   - All products grid
   - Placeholder icon if image missing

3. **Product Detail Page** (`/products/[product-slug]`):
   - Large product image
   - Gallery/Swiper if multiple images
   - Specifications and details

4. **Home Page**:
   - Featured products section
   - Category cards section

## Next Steps

To add images for other categories, follow the same pattern:

```typescript
// In config/products/categories/[category-name].ts
{
  id: "product-id",
  name: "Product Name",
  slug: "product-slug",
  image: "/products/[category-folder]/[product-slug].png",
  // ... other fields
}
```

## Multi-Image Products

For products with multiple images (variants, angles):

```typescript
{
  id: "product-id",
  name: "Product Name",
  slug: "product-slug",
  images: [
    "/products/category/product-front.png",
    "/products/category/product-side.png",
    "/products/category/product-detail.png",
  ],
  // ... other fields
}
```

The system will automatically use `images` array if available, otherwise fall back to `image` field.

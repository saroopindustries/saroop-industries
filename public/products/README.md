# Product Images

This folder contains product images organized by category.

## Folder Structure

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

## Image Specifications

- **Recommended Size**: 800x800px (1:1 aspect ratio) or 1200x800px (3:2 aspect ratio)
- **Format**: PNG or JPG
- **Background**: White or transparent preferred
- **Naming Convention**: Use product slug (e.g., `gold-auto-cables-30swg.png`)

## Usage in Code

Images are referenced in product configuration files:

```typescript
{
  id: "wire-1",
  name: "Gold Auto Cables (30 SWG)",
  slug: "gold-auto-cables-30swg",
  image: "/products/wire-cables/gold-auto-cables-30swg.png",
  // ... other fields
}
```

For products with multiple images (for gallery/swiper):

```typescript
{
  id: "product-1",
  name: "Product Name",
  images: [
    "/products/category/product-1.png",
    "/products/category/product-2.png",
    "/products/category/product-3.png",
  ],
  // ... other fields
}
```

## Fallback Behavior

If a product image is not found:
- Category pages show a placeholder icon
- Product listing pages show a gradient background with icon
- Product detail pages show a large placeholder icon
- No errors are displayed to users

## Adding New Images

1. Take/obtain high-quality product photo
2. Remove background or use clean white background
3. Resize to recommended dimensions
4. Optimize for web (compress without quality loss)
5. Name file matching the product slug
6. Place in appropriate category folder
7. Update product config with image path

# Product Images Guide

## ✅ Complete Implementation

All components now support **both single and multiple images** for products!

## How to Add Images

### Option 1: Single Image
For products with one image:

```typescript
{
  id: "wire-1",
  name: "Gold Auto Cables (30 SWG)",
  slug: "gold-auto-cables-30swg",
  category: "Wire & Cables",
  subcategory: "Auto Cables",
  image: "/products/wire-cables/gold-auto-cables-30swg.png", // Single image
  // ... other fields
}
```

### Option 2: Multiple Images (Array)
For products with multiple images (will show as Swiper carousel):

```typescript
{
  id: "wire-1",
  name: "Gold Auto Cables (30 SWG)",
  slug: "gold-auto-cables-30swg",
  category: "Wire & Cables",
  subcategory: "Auto Cables",
  images: [ // Array of images
    "/products/wire-cables/gold-auto-cables-30swg-front.png",
    "/products/wire-cables/gold-auto-cables-30swg-side.png",
    "/products/wire-cables/gold-auto-cables-30swg-detail.png",
  ],
  // ... other fields
}
```

## Where Images Appear

### 1. **Product Detail Page** ✅
- **Single image**: Shows large image with zoom
- **Multiple images**: Swiper carousel with dots and navigation arrows
- Location: `/products/[product-slug]`

### 2. **Products Listing Page** ✅
- **Single image**: Shows image in card
- **Multiple images**: Swiper carousel with dots (no arrows)
- Location: `/products`

### 3. **Category Pages** ✅
- **Single image**: Shows image in card
- **Multiple images**: Swiper carousel with dots (no arrows)
- Location: `/products/[category-slug]`

### 4. **Home Page (Featured Products)** ✅
- **Single image**: Shows image in featured card
- **Multiple images**: Swiper carousel with dots (no arrows)
- Location: `/`

## Image Behavior

### Display Logic
The system automatically detects and handles images:

```typescript
// Priority order:
1. If `images` array exists → Use images array (Swiper if 2+ images)
2. Else if `image` string exists → Use single image
3. Else → Show category icon placeholder
```

### Swiper Features
- **Pagination dots** at bottom
- **Active dot highlighted** in green (#93c967)
- **Clickable dots** for navigation
- **Smooth transitions** between slides
- **No navigation arrows** on grid cards (cleaner look)
- **Navigation arrows** on detail page (larger view)

### Hover Effects
- **Single image**: 1.05x zoom on hover
- **Multiple images**: Smooth pagination dot transitions
- **No image**: Icon scales to 1.1x

## Folder Structure

```
/public/products/
├── wire-cables/
│   ├── gold-auto-cables-30swg.png
│   ├── gold-auto-cables-30swg-2.png
│   └── gold-auto-cables-30swg-3.png
├── brass-terminal/
│   └── [product images]
├── fuses/
│   └── [product images]
└── [other categories]/
    └── [product images]
```

## Naming Convention

### Single Image
```
{product-slug}.png
```
Example: `gold-auto-cables-30swg.png`

### Multiple Images
```
{product-slug}.png          (main image)
{product-slug}-2.png        (additional view)
{product-slug}-3.png        (detail shot)
{product-slug}-front.png    (descriptive name)
{product-slug}-side.png     (descriptive name)
```

Examples:
- `gold-auto-cables-30swg.png`
- `gold-auto-cables-30swg-2.png`
- `gold-auto-cables-30swg-detail.png`

## Image Specifications

- **Size**: 800x800px (1:1 square) or 1200x800px (3:2 landscape)
- **Format**: PNG (preferred) or JPG
- **Background**: White or transparent recommended
- **Quality**: High resolution, web-optimized (compressed)
- **Max file size**: 200-300KB per image (optimized)

## Component Updates

### Files Modified
1. ✅ `/components/products/ProductDetailView.tsx` - Handles both image types
2. ✅ `/app/products/page.tsx` - Shows Swiper for multiple images
3. ✅ `/app/products/[slug]/page.tsx` - Category page with Swiper support
4. ✅ `/app/products/[slug]/page.module.scss` - Swiper styles for category pages
5. ✅ `/components/sections/ProductGrid.tsx` - Home page with Swiper support
6. ✅ `/components/sections/ProductGrid.module.scss` - Swiper styles for home page

### Swiper Integration
- ✅ Import Swiper components and styles
- ✅ Handle image arrays dynamically
- ✅ Styled pagination dots (white/green theme)
- ✅ Smooth transitions and hover effects

## Example Configuration

```typescript
// config/products/categories/wire-cables.ts

export const wireProducts: Product[] = [
  // Product with multiple images
  {
    id: "wire-1",
    name: "Gold Auto Cables (30 SWG)",
    slug: "gold-auto-cables-30swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium quality auto cables...",
    featured: true,
    partNumber: "GAC-30SWG",
    images: [ // Multiple images - shows as carousel
      "/products/wire-cables/gold-auto-cables-30swg.png",
      "/products/wire-cables/gold-auto-cables-30swg-2.png",
      "/products/wire-cables/gold-auto-cables-30swg-3.png",
    ],
    specifications: {
      "Wire Gauge": "30 SWG",
      "Material": "Copper with PVC insulation",
    },
    // ... other fields
  },
  
  // Product with single image
  {
    id: "wire-2",
    name: "Gold Thin PVC (AVS Type)",
    slug: "gold-thin-pvc-avs",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Thin wall PVC insulated cables...",
    featured: true,
    image: "/products/wire-cables/gold-thin-pvc-avs.png", // Single image
    specifications: {
      "Type": "AVS",
      "Available Sizes": "0.50, 0.75, 1.00 sq mm",
    },
  },
];
```

## Testing

### Test URLs
1. **Product with image**: http://localhost:3000/products/gold-auto-cables-30swg
2. **Products listing**: http://localhost:3000/products
3. **Category page**: http://localhost:3000/products/wire-cables
4. **Home page**: http://localhost:3000/

### Verification Checklist
- [ ] Single image displays correctly
- [ ] Multiple images show Swiper carousel
- [ ] Pagination dots visible and clickable
- [ ] Images zoom on hover
- [ ] Fallback icon shows when no image
- [ ] Mobile responsive layout works
- [ ] No console errors

## Best Practices

### For Photography
1. Use consistent lighting across all images
2. White or clean background preferred
3. Show product from different angles
4. Include detail shots of important features
5. Maintain consistent aspect ratio

### For Web Performance
1. Compress images before uploading
2. Use PNG for products with transparency
3. Use JPG for photos with no transparency
4. Aim for 100-300KB per image
5. Lazy loading is handled automatically by Swiper

### For User Experience
1. Put the best/main image first in array
2. Limit to 3-5 images per product (optimal)
3. Include descriptive alt text in filename
4. Use high-quality images (no pixelation)

## Migration Guide

### Converting Single Image to Multiple Images

**Before:**
```typescript
{
  id: "product-1",
  image: "/products/category/product.png",
}
```

**After:**
```typescript
{
  id: "product-1",
  images: [
    "/products/category/product.png",
    "/products/category/product-2.png",
    "/products/category/product-3.png",
  ],
}
```

### Batch Update Script (if needed)
If you need to update many products at once, you can use a find/replace:

```typescript
// Find:
image: "/products/([^"]+)",

// Replace with:
images: ["/products/$1"],
```

## Troubleshooting

### Issue: Images not showing
- Check file path is correct (case-sensitive)
- Verify image exists in `/public/products/` folder
- Check browser console for 404 errors
- Ensure Next.js dev server restarted after adding new images

### Issue: Swiper not working
- Verify Swiper imports are present
- Check for console errors
- Ensure images array has at least 2 items
- Clear browser cache and hard refresh

### Issue: Image quality poor
- Use higher resolution source images (800x800 minimum)
- Re-compress with better quality settings
- Check if browser is loading correct image size

## Next Steps

1. **Add more product images** to `/public/products/[category]/`
2. **Update product configs** with image/images fields
3. **Test on different devices** (desktop, tablet, mobile)
4. **Optimize images** for web performance
5. **Consider adding image alt text** for accessibility

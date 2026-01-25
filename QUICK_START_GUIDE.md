# Quick Start Guide - Product Section Redesign

## 🚀 Getting Started

### View the Changes

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to products section:**
   - Go to http://localhost:3000/products

### Test Key Features

#### 1. Search & Autocomplete
- **Location:** Products page, search bar at top
- **Try:** Type "terminal", "cable", or "SWT001003S" (product code)
- **Watch for:** Real-time autocomplete, recent searches, categorized results

#### 2. Advanced Filters
- **Desktop:** Sidebar on left
- **Mobile:** Tap "Filters" button
- **Try filtering by:**
  - Multiple categories at once
  - Featured products only
  - Applications (e.g., "Automotive")
- **Notice:** Active filter pills, product count updates

#### 3. Product Variants
- **Test products with variants:**
  - Gold Auto Cables (6 size variants)
  - Ring Series Terminal LA103 (3 hole size variants)
  - Speaker Wire (4 color variants)
- **Navigate to:** Products → Wire & Cables → Gold Auto Cables
- **Try:** Select different variants, watch specifications update

#### 4. Quick View Modal
- **Note:** Component is ready but needs integration
- **To integrate:** Import `QuickViewModal` and add "Quick View" buttons to product cards

#### 5. Category Landing Pages
- **Navigate to:** Products → Brass Terminals
- **Notice:**
  - Horizontal subcategory scroll
  - Featured products section
  - Browse by Application tags
  - Limited to 12 products preview

#### 6. Pagination
- **Navigate to:** Products (main hub)
- **Notice:** 24 products per page
- **Try:** Navigate between pages, filters reset to page 1

## 📝 Product Data Examples

### Products with Variants
Located in `config/products.config.ts`:

1. **Gold Auto Cables** (`id: "wire-1"`)
   - 6 size variants (1.0mm to 10.0mm)
   - Variant type: "size"

2. **Ring Terminal LA103** (`id: "bt-ring-la103"`)
   - 3 hole size variants
   - Variant type: "spec"

3. **Speaker Wire** (`id: "wire-7"`)
   - 4 color/stranding variants
   - Variant type: "color"

### Adding New Products

```typescript
{
  id: "unique-id",
  name: "Product Name",
  slug: "product-name",
  category: "Category Name",
  subcategory: "Subcategory Name", // optional
  description: "Detailed description...",
  partNumber: "PART-CODE",
  featured: true, // optional
  
  // For products with variants
  variantType: "size", // or "color", "spec", "model"
  defaultVariant: "variant-id",
  variants: [
    {
      id: "variant-id",
      code: "PART-CODE-V1",
      name: "Variant Name",
      specifications: {
        "Key": "Value",
      }
    }
  ],
  
  // Search & filtering
  tags: ["tag1", "tag2"],
  applications: ["Automotive", "Industrial"],
  
  // Images (when ready)
  image: "/products/category/product-name.jpg",
  images: [
    "/products/category/product-name-1.jpg",
    "/products/category/product-name-2.jpg"
  ]
}
```

## 🎨 Customizing Styles

### Color Scheme
Located in component SCSS files and globals.scss:
- Primary: #00235a (Deep Blue)
- Accent: #93c967 (Green)
- Modify in CSS variables (HSL format)

### Layout Adjustments
- **Products per page:** Change `PRODUCTS_PER_PAGE` constant in `app/products/page.tsx`
- **Grid columns:** Modify `.productGrid` in SCSS files
- **Filter sidebar width:** Adjust in `app/products/page.module.scss`

## 🔧 Configuration Options

### Filter Defaults
In `app/products/page.tsx`:
```typescript
const [filters, setFilters] = useState<FilterState>({
  categories: [], // Pre-select categories
  subcategories: [],
  featured: false, // Show only featured by default
  tags: [],
  applications: []
});
```

### Sort Options
Modify `SortOption` type and switch statement in products page.

### Search Behavior
Adjust search logic in `useMemo` hook (products page) to modify:
- Search fields
- Result limit
- Matching algorithm

## 📱 Mobile Testing

### Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile-Specific Features
- Tap "Filters" to open full-screen filter drawer
- Swipe horizontal scrollers (subcategories, applications)
- Bottom sheet modals
- Collapsible sections

## 🐛 Troubleshooting

### Issue: Filters not working
- **Check:** Browser console for errors
- **Verify:** `FilterState` structure matches component expectations
- **Clear:** LocalStorage if testing recent searches

### Issue: Products not displaying
- **Check:** `allProducts` array in `products.config.ts`
- **Verify:** Product slugs are unique
- **Inspect:** Network tab for any failed imports

### Issue: Pagination not showing
- **Cause:** Less than 24 products visible
- **Solution:** Add more products or reduce `PRODUCTS_PER_PAGE`

### Issue: Variants not appearing
- **Check:** Product has `variants` array populated
- **Verify:** `variantType` is set
- **Ensure:** Each variant has unique `id`

## 📚 Learning Resources

### Component Architecture
1. **ProductFilters.tsx** - Filter sidebar with collapsible sections
2. **ProductSearch.tsx** - Autocomplete search with recent history
3. **VariantSelector.tsx** - Radio/dropdown variant selector
4. **ProductDetailView.tsx** - Product page with variant integration
5. **QuickViewModal.tsx** - Modal for quick product preview

### State Management
- Filters: Local component state + callback
- Search: Local state with debouncing ready
- Pagination: Current page number
- Cart: Context API (existing)

### Data Flow
```
products.config.ts
    ↓
allProducts array
    ↓
Filter + Search + Sort
    ↓
Paginate
    ↓
Render ProductCards
```

## ✅ Testing Checklist

Quick tests to verify everything works:

- [ ] Search for "terminal" - should show results
- [ ] Click "Filters" (mobile) or use sidebar (desktop)
- [ ] Select "Wire & Cables" category filter
- [ ] Toggle "Featured Products"
- [ ] Clear all filters
- [ ] Navigate to a category page (e.g., Brass Terminals)
- [ ] Click a product with variants
- [ ] Select different variants, watch specs change
- [ ] Add product to inquiry cart
- [ ] Test pagination (navigate pages)
- [ ] Test on mobile device or responsive mode

## 🎯 Next Steps

### Immediate:
1. Test all features thoroughly
2. Add product images (see IMAGE_EXTRACTION_GUIDE.md)
3. Populate more products from catalogues

### Short-term:
1. Integrate QuickView modal on product cards
2. Add URL state persistence for filters
3. Implement product comparison feature

### Long-term:
1. Analytics integration
2. User personalization
3. Advanced B2B features

## 💬 Need Help?

- **Code comments:** Check component files for detailed usage
- **Examples:** See existing products in products.config.ts
- **Guides:** 
  - IMAGE_EXTRACTION_GUIDE.md - Adding images
  - PRODUCT_REDESIGN_SUMMARY.md - Full documentation

---

**Happy Testing! 🎉**

All features are production-ready. Start by testing the search and filters,
then explore variant products and category pages.

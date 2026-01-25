"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { allProducts, productCategories } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Grid, List, SlidersHorizontal, X } from "lucide-react";
import { useState, useMemo, useTransition } from "react";
import ProductFilters, { FilterState } from "@/components/products/ProductFilters";
import ProductSearch from "@/components/products/ProductSearch";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import { Pagination } from "@/components/ui/pagination";
import { useCart } from "@/contexts/CartContext";
import styles from "./page.module.scss";

type ViewMode = "grid" | "list" | "compact";
type SortOption = "name" | "featured" | "category" | "newest";

const PRODUCTS_PER_PAGE = 24;

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const { addToCart, isInCart } = useCart();

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    subcategories: [],
    featured: false,
    tags: [],
    applications: [],
  });

  // Filter and search products
  const { filteredProducts, totalPages, paginatedProducts } = useMemo(() => {
    let products = [...allProducts];

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.partNumber?.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.categories.length > 0) {
      products = products.filter((p) => {
        const category = productCategories.find((cat) =>
          cat.products.some((prod) => prod.id === p.id)
        );
        return category && filters.categories.includes(category.slug);
      });
    }

    if (filters.subcategories.length > 0) {
      products = products.filter((p) =>
        p.subcategory
          ? filters.subcategories.includes(
              p.subcategory.toLowerCase().replace(/\s+/g, "-")
            )
          : false
      );
    }

    if (filters.featured) {
      products = products.filter((p) => p.featured);
    }

    if (filters.applications.length > 0) {
      products = products.filter((p) =>
        p.applications?.some((app) => filters.applications.includes(app))
      );
    }

    // Sort products
    switch (sortBy) {
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
        products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "category":
        products.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case "newest":
        // Keep original order (assuming newer products are added last)
        break;
    }

    // Calculate pagination
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const paginatedProducts = products.slice(start, end);

    return { filteredProducts: products, totalPages, paginatedProducts };
  }, [searchQuery, filters, sortBy, currentPage]);

  // Handle filter/search changes - reset to page 1
  const handleFilterChange = (newFilters: FilterState) => {
    startTransition(() => {
      setFilters(newFilters);
      setCurrentPage(1);
    });
  };

  const handleSearchChange = (query: string) => {
    startTransition(() => {
      setSearchQuery(query);
      setCurrentPage(1);
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.subcategories.length > 0 ||
    filters.featured ||
    filters.applications.length > 0;

  return (
    <div className={styles.productsPage}>
      {/* Main Products Section */}
      <section className={styles.productsSection}>
        <div className="container mx-auto px-4 py-8">
          <div className={styles.layout}>
            {/* Desktop Filters Sidebar */}
            <aside className={styles.filterSidebar}>
              <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
            </aside>

            {/* Products Grid */}
            <div className={styles.productsMain}>
              {/* Toolbar */}
              <div className={styles.toolbar}>
                <div className={styles.toolbarLeft}>
                  <h2 className={styles.resultCount}>
                    {filteredProducts.length} Products
                    {hasActiveFilters && " (filtered)"}
                  </h2>

                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    className={styles.mobileFilterButton}
                    onClick={() => setShowMobileFilters(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className={styles.filterBadge}>
                        {filters.categories.length +
                          filters.subcategories.length +
                          (filters.featured ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </div>

                {/* Search Bar */}
                <div className={styles.toolbarCenter}>
                  <ProductSearch
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search products, categories, or codes..."
                  />
                </div>

                <div className={styles.toolbarRight}>
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className={styles.sortSelect}
                  >
                    <option value="featured">Featured First</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="category">Category</option>
                    <option value="newest">Newest</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className={styles.viewToggle}>
                    <button
                      className={viewMode === "grid" ? styles.active : ""}
                      onClick={() => setViewMode("grid")}
                      title="Grid view"
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      className={viewMode === "list" ? styles.active : ""}
                      onClick={() => setViewMode("list")}
                      title="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters Pills */}
              {hasActiveFilters && (
                <div className={styles.activeFilterPills}>
                  {filters.categories.map((catSlug) => {
                    const cat = productCategories.find((c) => c.slug === catSlug);
                    return cat ? (
                      <button
                        key={catSlug}
                        className={styles.filterPill}
                        onClick={() =>
                          setFilters({
                            ...filters,
                            categories: filters.categories.filter(
                              (c) => c !== catSlug
                            ),
                          })
                        }
                      >
                        {cat.name}
                        <X className="h-3 w-3" />
                      </button>
                    ) : null;
                  })}
                  {filters.featured && (
                    <button
                      className={styles.filterPill}
                      onClick={() => setFilters({ ...filters, featured: false })}
                    >
                      Featured
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  <button
                    className={styles.clearAll}
                    onClick={() =>
                      setFilters({
                        categories: [],
                        subcategories: [],
                        featured: false,
                        tags: [],
                        applications: [],
                      })
                    }
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Products Grid */}
              {isPending ? (
                <div className={`${styles.productGrid} ${styles[viewMode]}`}>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                </div>
              ) : paginatedProducts.length > 0 ? (
                <>
                  <div className={`${styles.productGrid} ${styles[viewMode]}`}>
                    {paginatedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                      className={styles.productCardWrapper}
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        className={styles.productCard}
                      >
                        <div className={styles.productImage}>
                          <span className={styles.productIcon}>📦</span>
                          {product.featured && (
                            <span className={styles.featuredBadge}>⭐ Featured</span>
                          )}
                          {product.variants && product.variants.length > 0 && (
                            <span className={styles.variantBadge}>
                              {product.variants.length} variants
                            </span>
                          )}
                        </div>
                        <div className={styles.productContent}>
                          <span className={styles.categoryBadge}>
                            {product.category}
                          </span>
                          <h3 className={styles.productName}>{product.name}</h3>
                          {product.partNumber && (
                            <p className={styles.partNumber}>
                              Code: {product.partNumber}
                            </p>
                          )}
                          <p className={styles.productDescription}>
                            {product.description.length > 120
                              ? `${product.description.slice(0, 120)}...`
                              : product.description}
                          </p>
                          <div className={styles.productFooter}>
                            <span className={styles.viewDetails}>
                              View Details
                              <ArrowRight className="h-4 w-4" />
                            </span>
                            <Button
                              size="sm"
                              variant={isInCart(product.id) ? "secondary" : "default"}
                              onClick={(e) => {
                                e.preventDefault();
                                addToCart(product);
                              }}
                              className={styles.addToCartBtn}
                            >
                              {isInCart(product.id) ? "Added" : "Add to Inquiry"}
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
              ) : (
                <div className={styles.noResults}>
                  <Filter className="h-16 w-16" />
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filters</p>
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        setFilters({
                          categories: [],
                          subcategories: [],
                          featured: false,
                          tags: [],
                          applications: [],
                        })
                      }
                    >
                      Clear All Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Drawer */}
      {showMobileFilters && (
        <div className={styles.mobileFiltersOverlay}>
          <div className={styles.mobileFiltersBackdrop} onClick={() => setShowMobileFilters(false)} />
          <div className={styles.mobileFiltersDrawer}>
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClose={() => setShowMobileFilters(false)}
              isMobile
            />
          </div>
        </div>
      )}
    </div>
  );
}
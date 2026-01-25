"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/config/products.config";
import styles from "./ProductFilters.module.scss";

export interface FilterState {
  categories: string[];
  subcategories: string[];
  featured: boolean;
  tags: string[];
  applications: string[];
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function ProductFilters({
  filters,
  onFilterChange,
  onClose,
  isMobile = false,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["categories", "featured"])
  );

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const handleCategoryToggle = (categorySlug: string) => {
    const newCategories = filters.categories.includes(categorySlug)
      ? filters.categories.filter((c) => c !== categorySlug)
      : [...filters.categories, categorySlug];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleSubcategoryToggle = (subcategorySlug: string) => {
    const newSubcategories = filters.subcategories.includes(subcategorySlug)
      ? filters.subcategories.filter((s) => s !== subcategorySlug)
      : [...filters.subcategories, subcategorySlug];
    onFilterChange({ ...filters, subcategories: newSubcategories });
  };

  const handleFeaturedToggle = () => {
    onFilterChange({ ...filters, featured: !filters.featured });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      subcategories: [],
      featured: false,
      tags: [],
      applications: [],
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.subcategories.length > 0 ||
    filters.featured ||
    filters.tags.length > 0 ||
    filters.applications.length > 0;

  // Get all subcategories from selected categories
  const availableSubcategories = productCategories
    .filter((cat) => filters.categories.includes(cat.slug))
    .flatMap((cat) => cat.subcategories || []);

  // Get all unique applications
  const allApplications = Array.from(
    new Set(
      productCategories.flatMap((cat) =>
        cat.products.flatMap((p) => p.applications || [])
      )
    )
  ).sort();

  return (
    <div className={`${styles.filters} ${isMobile ? styles.mobile : ""}`}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Filters</h3>
        {isMobile && (
          <button onClick={onClose} className={styles.closeButton}>
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Active Filters Count */}
      {hasActiveFilters && (
        <div className={styles.activeFilters}>
          <span className={styles.count}>
            {filters.categories.length +
              filters.subcategories.length +
              (filters.featured ? 1 : 0)}{" "}
            active
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className={styles.clearButton}
          >
            Clear All
          </Button>
        </div>
      )}

      <div className={styles.sections}>
        {/* Categories */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection("categories")}
          >
            <span className={styles.sectionTitle}>Categories</span>
            {expandedSections.has("categories") ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          <AnimatePresence>
            {expandedSections.has("categories") && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.sectionContent}
              >
                {productCategories.map((category) => (
                  <label key={category.id} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.slug)}
                      onChange={() => handleCategoryToggle(category.slug)}
                    />
                    <span className={styles.checkboxLabel}>
                      <span className={styles.icon}>{category.icon}</span>
                      {category.name}
                    </span>
                    <span className={styles.count}>
                      ({category.products.length})
                    </span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subcategories (only show if categories are selected) */}
        {availableSubcategories.length > 0 && (
          <div className={styles.section}>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("subcategories")}
            >
              <span className={styles.sectionTitle}>Subcategories</span>
              {expandedSections.has("subcategories") ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.has("subcategories") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.sectionContent}
                >
                  {availableSubcategories.map((subcategory) => (
                    <label key={subcategory.id} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={filters.subcategories.includes(
                          subcategory.slug
                        )}
                        onChange={() =>
                          handleSubcategoryToggle(subcategory.slug)
                        }
                      />
                      <span className={styles.checkboxLabel}>
                        {subcategory.name}
                      </span>
                      <span className={styles.count}>
                        ({subcategory.products.length})
                      </span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Featured Products */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection("featured")}
          >
            <span className={styles.sectionTitle}>Product Type</span>
            {expandedSections.has("featured") ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          <AnimatePresence>
            {expandedSections.has("featured") && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.sectionContent}
              >
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={handleFeaturedToggle}
                  />
                  <span className={styles.checkboxLabel}>
                    ⭐ Featured Products
                  </span>
                </label>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Applications */}
        {allApplications.length > 0 && (
          <div className={styles.section}>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("applications")}
            >
              <span className={styles.sectionTitle}>Applications</span>
              {expandedSections.has("applications") ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.has("applications") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.sectionContent}
                >
                  {allApplications.slice(0, 8).map((app) => (
                    <label key={app} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={filters.applications.includes(app)}
                        onChange={() => {
                          const newApps = filters.applications.includes(app)
                            ? filters.applications.filter((a) => a !== app)
                            : [...filters.applications, app];
                          onFilterChange({ ...filters, applications: newApps });
                        }}
                      />
                      <span className={styles.checkboxLabel}>{app}</span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Apply Button (Mobile) */}
      {isMobile && (
        <div className={styles.mobileFooter}>
          <Button onClick={onClose} className={styles.applyButton}>
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
}

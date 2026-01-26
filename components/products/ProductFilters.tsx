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
    new Set(["categories"])
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
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

  const toggleCategoryExpansion = (categorySlug: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categorySlug)) {
      newExpanded.delete(categorySlug);
    } else {
      newExpanded.add(categorySlug);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategoryToggle = (categorySlug: string) => {
    const category = productCategories.find((cat) => cat.slug === categorySlug);
    const isCurrentlySelected = filters.categories.includes(categorySlug);
    
    let newCategories: string[];
    let newSubcategories: string[];
    
    if (isCurrentlySelected) {
      // Deselecting category - remove it and all its subcategories
      newCategories = filters.categories.filter((c) => c !== categorySlug);
      
      // Remove all subcategories of this category
      const subcategorySlugs = category?.subcategories?.map((sub) => sub.slug) || [];
      newSubcategories = filters.subcategories.filter(
        (sub) => !subcategorySlugs.includes(sub)
      );
    } else {
      // Selecting category - add it and all its subcategories
      newCategories = [...filters.categories, categorySlug];
      
      // Add all subcategories of this category
      const subcategorySlugs = category?.subcategories?.map((sub) => sub.slug) || [];
      newSubcategories = [
        ...filters.subcategories,
        ...subcategorySlugs.filter((slug) => !filters.subcategories.includes(slug))
      ];
      
      // Auto-expand the category to show selected subcategories
      if (category?.subcategories && category.subcategories.length > 0) {
        setExpandedCategories(prev => new Set([...prev, categorySlug]));
      }
    }
    
    onFilterChange({ ...filters, categories: newCategories, subcategories: newSubcategories });
  };

  const handleSubcategoryToggle = (subcategorySlug: string) => {
    const isCurrentlySelected = filters.subcategories.includes(subcategorySlug);
    
    // Find which category this subcategory belongs to
    const parentCategory = productCategories.find((cat) =>
      cat.subcategories?.some((sub) => sub.slug === subcategorySlug)
    );
    
    let newSubcategories: string[];
    let newCategories = [...filters.categories];
    
    if (isCurrentlySelected) {
      // Deselecting subcategory
      newSubcategories = filters.subcategories.filter((s) => s !== subcategorySlug);
      
      // Also deselect parent category if it was selected
      if (parentCategory && filters.categories.includes(parentCategory.slug)) {
        newCategories = filters.categories.filter((c) => c !== parentCategory.slug);
      }
    } else {
      // Selecting subcategory
      newSubcategories = [...filters.subcategories, subcategorySlug];
      
      // Check if all subcategories of parent are now selected
      if (parentCategory) {
        const allSubcategorySlugs = parentCategory.subcategories?.map((sub) => sub.slug) || [];
        const allSelected = allSubcategorySlugs.every((slug) => 
          slug === subcategorySlug || newSubcategories.includes(slug)
        );
        
        // If all subcategories are selected, also select the parent
        if (allSelected && !filters.categories.includes(parentCategory.slug)) {
          newCategories = [...filters.categories, parentCategory.slug];
        }
      }
    }
    
    onFilterChange({ ...filters, categories: newCategories, subcategories: newSubcategories });
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
    filters.subcategories.length > 0;

  return (
    <div className={`${styles.filters} ${isMobile ? styles.mobile : ""}`}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Filter Products</h3>
        {isMobile ? (
          <button onClick={onClose} className={styles.closeButton}>
            <X className="h-5 w-5" />
          </button>
        ) : (
          <button onClick={clearAllFilters} className={styles.clearAll}>
            Clear All
          </button>
        )}
      </div>

      <div className={styles.sections}>
        {/* Categories with nested subcategories */}
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
                  <div key={category.id} className={styles.categoryGroup}>
                    <div className={styles.categoryRow}>
                      {category.subcategories && category.subcategories.length > 0 && (
                        <button
                          className={styles.categoryExpander}
                          onClick={() => toggleCategoryExpansion(category.slug)}
                          aria-label={`${expandedCategories.has(category.slug) ? 'Collapse' : 'Expand'} ${category.name}`}
                        >
                          {expandedCategories.has(category.slug) ? (
                            <ChevronDown className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronUp className="h-3.5 w-3.5" />
                          )}
                        </button>
                      )}
                      <label className={styles.checkbox}>
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category.slug)}
                          onChange={() => handleCategoryToggle(category.slug)}
                        />
                        <span className={styles.checkboxLabel}>
                          {category.name}
                        </span>
                        <span className={styles.count}>
                          {category.products.length}
                        </span>
                      </label>
                    </div>

                    {/* Nested Subcategories */}
                    {category.subcategories && category.subcategories.length > 0 && expandedCategories.has(category.slug) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.subcategoryList}
                      >
                        {category.subcategories.map((subcategory) => (
                          <label key={subcategory.id} className={`${styles.checkbox} ${styles.nested}`}>
                            <input
                              type="checkbox"
                              checked={filters.subcategories.includes(subcategory.slug)}
                              onChange={() => handleSubcategoryToggle(subcategory.slug)}
                            />
                            <span className={styles.checkboxLabel}>
                              {subcategory.name}
                            </span>
                            <span className={styles.count}>
                              {subcategory.products.length}
                            </span>
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer (Mobile) */}
      {isMobile && (
        <div className={styles.mobileFooter}>
          {hasActiveFilters && (
            <button onClick={clearAllFilters} className={styles.mobileClearAll}>
              Clear All Filters
            </button>
          )}
          <Button onClick={onClose} className={styles.applyButton}>
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
}

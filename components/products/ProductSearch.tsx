"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { allProducts, productCategories } from "@/config/products.config";
import { Input } from "@/components/ui/input";
import styles from "./ProductSearch.module.scss";

interface SearchResult {
  type: "product" | "category" | "code";
  id: string;
  name: string;
  slug: string;
  category?: string;
  code?: string;
  description?: string;
}

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
  onResultClick?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
}

const RECENT_SEARCHES_KEY = "recent_searches";
const MAX_RECENT_SEARCHES = 5;

export default function ProductSearch({
  value,
  onChange,
  onResultClick,
  placeholder = "Search products, categories, or codes...",
  autoFocus = false,
}: ProductSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);

  // Save search to recent searches
  const saveToRecentSearches = (query: string) => {
    if (!query.trim()) return;

    const updated = [
      query,
      ...recentSearches.filter((s) => s !== query),
    ].slice(0, MAX_RECENT_SEARCHES);

    setRecentSearches(updated);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  // Search function
  useEffect(() => {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const query = value.toLowerCase().trim();
    const searchResults: SearchResult[] = [];

    // Search in categories
    productCategories.forEach((category) => {
      if (
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
      ) {
        searchResults.push({
          type: "category",
          id: category.id,
          name: category.name,
          slug: category.slug,
          description: category.description,
        });
      }
    });

    // Search in products
    allProducts.forEach((product) => {
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesDesc = product.description.toLowerCase().includes(query);
      const matchesCode = product.partNumber?.toLowerCase().includes(query);
      const matchesTags = product.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      if (matchesName || matchesDesc || matchesCode || matchesTags) {
        searchResults.push({
          type: matchesCode ? "code" : "product",
          id: product.id,
          name: product.name,
          slug: product.slug,
          category: product.category,
          code: product.partNumber,
          description: product.description,
        });
      }
    });

    // Limit results
    setResults(searchResults.slice(0, 8));
  }, [value]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    saveToRecentSearches(value);
    setIsFocused(false);
    onResultClick?.();
  };

  const handleRecentSearchClick = (query: string) => {
    onChange(query);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  const showDropdown = isFocused && (value.trim() || recentSearches.length > 0);

  return (
    <div ref={searchRef} className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className={styles.searchInput}
          autoFocus={autoFocus}
        />
        {value && (
          <button onClick={handleClear} className={styles.clearButton}>
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.dropdown}
          >
            {/* Recent Searches */}
            {!value.trim() && recentSearches.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionTitle}>
                    <Clock className="h-4 w-4" />
                    <span>Recent Searches</span>
                  </div>
                  <button
                    onClick={clearRecentSearches}
                    className={styles.clearRecent}
                  >
                    Clear
                  </button>
                </div>
                <div className={styles.recentList}>
                  {recentSearches.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(query)}
                      className={styles.recentItem}
                    >
                      <Clock className="h-4 w-4" />
                      <span>{query}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {value.trim() && results.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionTitle}>
                    <Search className="h-4 w-4" />
                    <span>Search Results</span>
                  </div>
                  <span className={styles.resultCount}>
                    {results.length} found
                  </span>
                </div>
                <div className={styles.resultsList}>
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={`/products/${result.slug}`}
                      onClick={() => handleResultClick(result)}
                      className={styles.resultItem}
                    >
                      <div className={styles.resultIcon}>
                        {result.type === "category" ? "📁" : "📦"}
                      </div>
                      <div className={styles.resultContent}>
                        <div className={styles.resultName}>
                          {result.name}
                          {result.type === "code" && result.code && (
                            <span className={styles.code}>{result.code}</span>
                          )}
                        </div>
                        {result.category && (
                          <div className={styles.resultMeta}>
                            {result.category}
                          </div>
                        )}
                        {result.description && result.type === "category" && (
                          <div className={styles.resultDesc}>
                            {result.description.slice(0, 80)}...
                          </div>
                        )}
                      </div>
                      <div className={styles.resultArrow}>→</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {value.trim() && results.length === 0 && (
              <div className={styles.noResults}>
                <Search className="h-8 w-8" />
                <p>No products found for &quot;{value}&quot;</p>
                <span className={styles.suggestion}>
                  Try searching for categories like &quot;terminals&quot; or &quot;cables&quot;
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

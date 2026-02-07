"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { productCategories } from "@/config/products.config";
import { ArrowRight, Package, ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import styles from "./CategoriesSection.module.scss";

export default function CategoriesSection() {
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_COUNT = 8;
  const displayedCategories = showAll ? productCategories : productCategories.slice(0, INITIAL_COUNT);
  const hasMore = productCategories.length > INITIAL_COUNT;

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Browse by Category</h2>
          <p className={styles.subtitle}>Explore our comprehensive range of automotive electrical components</p>
        </motion.div>

        <div className={styles.categoriesGrid}>
          <AnimatePresence mode="sync">
            {displayedCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
              >
                <Link href={`/products/${category.slug}`} className={styles.categoryCard}>
                  <div className={styles.cardImage}>
                    {category.image && (
                      <img src={category.image} alt={category.name} />
                    )}
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{category.name}</h3>
                    <p className={styles.cardDesc}>{category.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.productCount}>
                        <Package className="h-4 w-4" />
                        {category.products.length} Products
                      </span>
                      <ArrowRight className={styles.arrow} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className={styles.viewAllFooter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {hasMore && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className={styles.toggleButton}
            >
              {showAll ? (
                <>
                  View Less
                  <ChevronUpIcon className="h-5 w-5" />
                </>
              ) : (
                <>
                  View More Categories ({productCategories.length - INITIAL_COUNT} more)
                  <ChevronDownIcon className="h-5 w-5" />
                </>
              )}
            </button>
          )}
          
          <Link href="/products" className={styles.viewAllButton}>
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

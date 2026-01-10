"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/config/products.config";
import { ArrowRight, ArrowUpRight, Package } from "lucide-react";
import styles from "./ProductGrid.module.scss";

// Icon mapping for product categories
const categoryIcons: Record<string, string> = {
  "BRASS TERMINAL": "🔌",
  "BATTERY CABLE SET": "🔋",
  "RELAY & FUSE HOLDER": "⚡",
  "TAPE": "📦",
  "SWITCHES": "🎛️",
  "RING SERIES TERMINALS": "⭕",
  "PLASTIC COMPONENT": "🧩",
  "HOLDERS": "📎",
  "HEAD LIGHT RELAY WIRING": "💡",
  "FUSE BOX": "📦",
  "FUSE": "🔧",
  "FLASHER": "💫",
  "CAPS": "🧢",
};

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

export default function ProductGrid({
  products,
  title = "Our Products",
  description = "Explore our comprehensive range of precision-engineered automotive components",
  showViewAll = true,
}: ProductGridProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Show only first 8 products for featured grid
  const displayProducts = products.slice(0, 8);

  return (
    <section ref={ref} className={styles.productSection}>
      {/* Background */}
      <div className={styles.background}>
        <div className={styles.backgroundGradient} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Product Catalog</span>
          <h2 className={styles.title}>
            {title.split(" ").map((word, index) =>
              index === 1 ? <span key={index}>{word}</span> : word + " "
            )}
          </h2>
          <p className={styles.subtitle}>{description}</p>
        </motion.div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`/products/${product.slug}`} className={styles.productCard}>
                <div className={styles.cardInner}>
                  {/* Image Area */}
                  <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.productIcon}>
                        {categoryIcons[product.name] || "📦"}
                      </span>
                    </div>
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewText}>
                        View Details
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <span className={styles.category}>{product.category}</span>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>

                  {/* Footer */}
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={styles.cardGlow} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            className={styles.viewAllWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/products" className={styles.viewAllButton}>
              <Package className="h-5 w-5" />
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className={styles.productCount}>500+ products across 17 categories</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

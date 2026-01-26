"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import { Product } from "@/config/products.config";
import { ArrowRight, ArrowUpRight, Package, ShoppingBag, Check, Sparkles, TrendingUp } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import styles from "./ProductGrid.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
  title = "Featured Products",
  description = "Discover our premium selection of precision-engineered automotive components trusted by leading manufacturers worldwide",
  showViewAll = true,
}: ProductGridProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Show only first 8 products for featured grid
  const displayProducts = products.slice(0, 8);

  return (
    <section ref={ref} className={styles.productSection}>
      {/* Background */}
      <div className={styles.background}>
        <div className={styles.backgroundPattern} />
        <div className={styles.backgroundGradient} />
      </div>

      <div className={styles.container}>
        {/* Header with Stats */}
        <motion.div
          className={styles.headerWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerBadge}>
            <Sparkles className={styles.badgeIcon} />
            <span>Premium Quality Products</span>
          </div>
          
          <h2 className={styles.mainTitle}>{title}</h2>
          <p className={styles.mainSubtitle}>{description}</p>

          <div className={styles.headerStats}>
            <div className={styles.stat}>
              <TrendingUp className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Package className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>17</span>
                <span className={styles.statLabel}>Categories</span>
              </div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Sparkles className={styles.statIcon} />
              <div className={styles.statContent}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Quality</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <ProductCard 
                product={product} 
                index={index}
                isHovered={hoveredIndex === index}
              />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        {showViewAll && (
          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>Explore Our Complete Collection</h3>
                <p className={styles.ctaDescription}>
                  Browse through our extensive catalog of over 500 premium automotive components
                </p>
              </div>
              <Link href="/products" className={styles.ctaButton}>
                <span>View All Products</span>
                <ArrowRight className={styles.ctaArrow} />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Separate ProductCard component for cart functionality
function ProductCard({ 
  product, 
  index,
  isHovered 
}: { 
  product: Product;
  index: number;
  isHovered: boolean;
}) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      {/* Featured Badge */}
      {product.featured && (
        <motion.div 
          className={styles.featuredBadge}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
        >
          <Sparkles className={styles.badgeIconSmall} />
          <span>Featured</span>
        </motion.div>
      )}

      <Link href={`/products/${product.slug}`} className={styles.cardLink}>
        <div className={styles.cardInner}>
          {/* Image Area with Gradient Overlay */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageGradient} />
            {(() => {
              // Handle both images array and single image
              const imageList = product.images || (product.image ? [product.image] : []);
              
              return imageList.length > 1 ? (
                <Swiper
                  modules={[SwiperPagination]}
                  pagination={{ clickable: true }}
                  className={styles.imageSwiper}
                  spaceBetween={0}
                  slidesPerView={1}
                >
                  {imageList.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img 
                        src={image} 
                        alt={`${product.name} - ${imgIndex + 1}`}
                        className={styles.productImage}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : imageList.length === 1 ? (
                <img 
                  src={imageList[0]} 
                  alt={product.name}
                  className={styles.productImage}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.productIcon}>
                    {categoryIcons[product.name] || "📦"}
                  </span>
                </div>
              );
            })()}
            
            {/* Hover Overlay */}
            <motion.div 
              className={styles.imageOverlay}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
            >
              <div className={styles.overlayContent}>
                <ArrowUpRight className={styles.overlayIcon} />
                <span className={styles.overlayText}>View Details</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.categoryBadge}>
              <span className={styles.categoryDot} />
              <span className={styles.categoryText}>{product.category}</span>
            </div>
            
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDescription}>{product.description}</p>

            {/* Product Meta */}
            <div className={styles.productMeta}>
              {product.partNumber && (
                <span className={styles.partNumber}>
                  PN: {product.partNumber}
                </span>
              )}
              {product.variants && product.variants.length > 0 && (
                <span className={styles.variantCount}>
                  {product.variants.length} variants
                </span>
              )}
            </div>
          </div>

          {/* Footer with Action */}
          <div className={styles.cardFooter}>
            <motion.button 
              className={`${styles.inquiryButton} ${inCart ? styles.inCart : ""}`}
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {inCart ? (
                <>
                  <Check className={styles.buttonIcon} />
                  <span>Added to Inquiry</span>
                </>
              ) : (
                <>
                  <ShoppingBag className={styles.buttonIcon} />
                  <span>Add to Inquiry</span>
                </>
              )}
            </motion.button>

            <span className={styles.learnMore}>
              Details
              <ArrowRight className={styles.learnMoreIcon} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

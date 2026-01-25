"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, ShoppingBag, Check, ExternalLink } from "lucide-react";
import { Product } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import VariantSelector from "./VariantSelector";
import { useCart } from "@/contexts/CartContext";
import styles from "./QuickViewModal.module.scss";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const { addToCart, isInCart } = useCart();

  // Reset selected variant when product changes
  useState(() => {
    if (product) {
      setSelectedVariantId(
        product.defaultVariant || product.variants?.[0]?.id || ""
      );
    }
  });

  if (!product) return null;

  const inCart = isInCart(product.id);
  const selectedVariant = product.variants?.find(
    (v) => v.id === selectedVariantId
  );
  const currentSpecifications = selectedVariant
    ? selectedVariant.specifications
    : product.specifications || {};

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={styles.modal}
          >
            {/* Close Button */}
            <button onClick={onClose} className={styles.closeButton}>
              <X className="h-5 w-5" />
            </button>

            <div className={styles.modalContent}>
              {/* Product Image */}
              <div className={styles.imageSection}>
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
              </div>

              {/* Product Info */}
              <div className={styles.infoSection}>
                <div className={styles.header}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{product.category}</span>
                    {product.subcategory && (
                      <span className={styles.subcategory}>
                        {product.subcategory}
                      </span>
                    )}
                  </div>

                  <h2 className={styles.title}>{product.name}</h2>

                  {product.partNumber && (
                    <p className={styles.partNumber}>
                      Code: {selectedVariant?.code || product.partNumber}
                    </p>
                  )}
                </div>

                <p className={styles.description}>
                  {product.description.length > 200
                    ? `${product.description.slice(0, 200)}...`
                    : product.description}
                </p>

                {/* Variant Selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className={styles.variants}>
                    <VariantSelector
                      variants={product.variants}
                      selectedVariantId={selectedVariantId}
                      onVariantChange={setSelectedVariantId}
                      variantType={product.variantType}
                      showSpecs={false}
                    />
                  </div>
                )}

                {/* Key Specifications */}
                {currentSpecifications &&
                  Object.keys(currentSpecifications).length > 0 && (
                    <div className={styles.specs}>
                      <h4>Key Specifications:</h4>
                      <div className={styles.specList}>
                        {Object.entries(currentSpecifications)
                          .slice(0, 4)
                          .map(([key, value]) => (
                            <div key={key} className={styles.specItem}>
                              <span className={styles.specKey}>{key}:</span>
                              <span className={styles.specValue}>{value}</span>
                            </div>
                          ))}
                      </div>
                      {Object.keys(currentSpecifications).length > 4 && (
                        <Link
                          href={`/products/${product.slug}`}
                          className={styles.viewAllSpecs}
                        >
                          View all specifications →
                        </Link>
                      )}
                    </div>
                  )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className={styles.applications}>
                    <span className={styles.appLabel}>Applications:</span>
                    <div className={styles.appTags}>
                      {product.applications.slice(0, 3).map((app) => (
                        <span key={app} className={styles.appTag}>
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className={styles.actions}>
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className={styles.addToCartBtn}
                  >
                    {inCart ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Added to Inquiry
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Add to Inquiry
                      </>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className={styles.viewFullBtn}
                  >
                    <Link href={`/products/${product.slug}`}>
                      View Full Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

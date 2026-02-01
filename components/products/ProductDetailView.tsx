"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination, Navigation } from "swiper/modules";
import { Product, ProductCategory } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Info, Phone, ShoppingBag, Check } from "lucide-react";
import VariantSelector from "./VariantSelector";
import { useCart } from "@/contexts/CartContext";
import styles from "./ProductDetailView.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductDetailViewProps {
  product: Product;
  productCategory?: ProductCategory;
  relatedProducts?: Product[];
}

export default function ProductDetailView({
  product,
  productCategory,
  relatedProducts = [],
}: ProductDetailViewProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.defaultVariant || product.variants?.[0]?.id || ""
  );
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const selectedVariant = product.variants?.find((v) => v.id === selectedVariantId);

  // Get current specifications (variant-specific or product-level)
  const currentSpecifications = selectedVariant
    ? selectedVariant.specifications
    : product.specifications || {};

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productPage}>
      {/* Product Details */}
      <section className={styles.productDetails}>
        <div className="container mx-auto px-4 py-6">
          <div className={styles.productLayout}>
            {/* Product Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.imageSection}
            >
              {/* Handle both images array and single image */}
              {(() => {
                let imageList = product.images || (product.image ? [product.image] : []);
                
                // If no images on main product, check first variant
                if (imageList.length === 0 && product.variants && product.variants.length > 0) {
                  const firstVariant = product.variants[0];
                  imageList = firstVariant.images || [];
                }
                
                return imageList.length > 0 ? (
                  <Swiper
                    modules={[SwiperPagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={imageList.length > 1}
                    className={styles.imageSwiper}
                    spaceBetween={0}
                    slidesPerView={1}
                  >
                    {imageList.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className={styles.mainImage}>
                          <img 
                            src={image} 
                            alt={`${product.name} - ${imgIndex + 1}`}
                            className={styles.productImage}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className={styles.mainImage}>
                    <span className={styles.productIconLarge}>📦</span>
                  </div>
                );
              })()}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.infoSection}
            >
              <div className={styles.productMeta}>
                <span className={styles.category}>{product.category}</span>
                {product.subcategory && (
                  <span className={styles.subcategory}>{product.subcategory}</span>
                )}
              </div>

              <h1 className={styles.productTitle}>{product.name}</h1>

              {product.partNumber && (
                <p className={styles.partNumber}>
                  Part #: {selectedVariant?.code || product.partNumber}
                </p>
              )}

              <p className={styles.productDesc}>{product.description}</p>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <VariantSelector
                  variants={product.variants}
                  selectedVariantId={selectedVariantId}
                  onVariantChange={setSelectedVariantId}
                  variantType={product.variantType}
                  showSpecs={false}
                />
              )}

              {/* Specifications */}
              {currentSpecifications && Object.keys(currentSpecifications).length > 0 && (
                <div className={styles.specifications}>
                  <h3>
                    <Info className="h-5 w-5" />
                    Specifications
                  </h3>
                  <div className={styles.specGrid}>
                    {Object.entries(currentSpecifications).map(([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <span className={styles.specKey}>{key}</span>
                        <span className={styles.specValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className={styles.applications}>
                  <h4>Applications:</h4>
                  <div className={styles.appTags}>
                    {product.applications.map((app) => (
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
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedProducts}>
          <div className="container mx-auto px-4 py-16">
            <h2 className={styles.sectionTitle}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <span>📦</span>
                    </div>
                    <div className={styles.relatedContent}>
                      <h4>{relatedProduct.name}</h4>
                      {relatedProduct.partNumber && (
                        <p className={styles.relatedCode}>
                          {relatedProduct.partNumber}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2>Need a Custom Solution?</h2>
            <p>
              Our team can help you find the right product or create custom
              specifications for your needs.
            </p>
            <div className={styles.ctaButtons}>
              <Button asChild size="lg">
                <Link href="/inquiry">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        </section>
    </div>
  );
}

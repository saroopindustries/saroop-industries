"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import { 
  productCategories, 
  getCategoryBySlug,
  getProductBySlug,
} from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Package, Phone } from "lucide-react";
import ProductDetailView from "@/components/products/ProductDetailView";
import { TypingAnimation } from "@/components/ui/typing-animation";
import styles from "./page.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const slug = params.slug;
  
  // First, check if it's a category
  const category = getCategoryBySlug(slug);
  
  if (category) {
    // Get featured products in this category
    const featuredProducts = category.products.filter(p => p.featured).slice(0, 4);
    
    // Render category page with all its products
    return (
      <div className={styles.categoryPage}>
        {/* Category Hero */}
        <section className={`${styles.hero} ${category.image ? styles.heroWithImage : ''}`}>
          <div className={styles.heroBackground}>
            {category.image && (
              <div className={styles.heroImage} style={{ backgroundImage: `url(${category.image})` }} />
            )}
            <div className={styles.heroOverlay} />
            <div className={styles.heroGlow} />
          </div>
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.heroContent}
            >
              <TypingAnimation 
                text={category.name} 
                duration={50}
                className={styles.title}
                as="h1"
              />
              <p className={styles.description}>{category.description}</p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <Package className="h-5 w-5" />
                  <span>{category.products.length} Products</span>
                </div>
                <Button asChild size="lg" className={styles.viewAllBtn}>
                  <Link href={`/products?category=${category.slug}`}>
                    View All {category.products.length} Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subcategories - Grid Layout */}
        {category.subcategories && category.subcategories.length > 0 && (
          <section className={styles.subcategoriesSection}>
            <div className="container mx-auto px-4 py-8">
              <div className={styles.subcategoriesHeader}>
                <h2 className={styles.sectionTitle}>Browse by Subcategory</h2>
                <p className={styles.sectionDesc}>Explore our specialized {category.name.toLowerCase()} products</p>
              </div>
              <div className={styles.subcategoriesGrid}>
                {category.subcategories.map((sub, index) => (
                  <motion.a
                    key={sub.id}
                    href={`/products?category=${category.slug}&subcategory=${sub.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={styles.subcategoryCard}
                  >
                    <div className={styles.subcategoryIcon}>
                      {index % 5 === 0 ? '🔌' : index % 5 === 1 ? '⚡' : index % 5 === 2 ? '🔧' : index % 5 === 3 ? '🔗' : '⚙️'}
                    </div>
                    <div className={styles.subcategoryContent}>
                      <h3 className={styles.subcategoryName}>{sub.name}</h3>
                      <p className={styles.subcategoryDesc}>{sub.description}</p>
                      <div className={styles.subcategoryFooter}>
                        <span className={styles.subcategoryCount}>
                          {sub.products.length} Products
                        </span>
                        <ArrowRight className={styles.subcategoryArrow} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className={styles.featuredSection}>
            <div className="container mx-auto px-4 py-12">
              <h2 className={styles.sectionTitle}>⭐ Featured {category.name}</h2>
              <div className={styles.featuredGrid}>
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/products/${product.slug}`} className={styles.featuredCard}>
                      <div className={styles.featuredImage}>
                        <span className={styles.productIcon}>📦</span>
                        <span className={styles.featuredTag}>Featured</span>
                      </div>
                      <div className={styles.featuredContent}>
                        <h3 className={styles.featuredName}>{product.name}</h3>
                        {product.partNumber && (
                          <p className={styles.featuredCode}>Code: {product.partNumber}</p>
                        )}
                        {product.variants && product.variants.length > 0 && (
                          <div className={styles.variantInfo}>
                            {product.variants.length} variants available
                          </div>
                        )}
                        <Button variant="ghost" size="sm" className={styles.featuredBtn}>
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* All Products Grid */}
        <section className={styles.products}>
          <div className="container mx-auto px-4 py-12">
            <div className={styles.productsHeader}>
              <h2 className={styles.sectionTitle}>All {category.name}</h2>
              <Button asChild variant="outline">
                <Link href={`/products?category=${category.slug}`}>
                  View with Filters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {category.products.length > 0 ? (
              <div className={styles.productGrid}>
                {category.products.slice(0, 12).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                  >
                    <Link href={`/products/${product.slug}`} className={styles.productCard}>
                      <div className={styles.productImageWrapper}>
                        {(() => {
                          // Handle both images array and single image
                          const imageList = product.images || (product.image ? [product.image] : []);
                          
                          return imageList.length > 1 ? (
                            <Swiper
                              modules={[SwiperPagination]}
                              pagination={{ clickable: true }}
                              className={styles.categoryImageSwiper}
                              spaceBetween={0}
                              slidesPerView={1}
                            >
                              {imageList.map((image, imgIndex) => (
                                <SwiperSlide key={imgIndex}>
                                  <div className={styles.productImage}>
                                    <img 
                                      src={image} 
                                      alt={`${product.name} - ${imgIndex + 1}`}
                                      className={styles.productImageImg}
                                    />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          ) : imageList.length === 1 ? (
                            <div className={styles.productImage}>
                              <img 
                                src={imageList[0]} 
                                alt={product.name}
                                className={styles.productImageImg}
                              />
                            </div>
                          ) : (
                            <div className={styles.productImage}>
                              <span className={styles.productIcon}>📦</span>
                            </div>
                          );
                        })()}
                        {product.featured && (
                          <span className={styles.featuredBadge}>⭐</span>
                        )}
                        {product.variants && product.variants.length > 0 && (
                          <span className={styles.variantBadge}>
                            {product.variants.length}
                          </span>
                        )}
                      </div>
                      <div className={styles.productContent}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        {product.partNumber && (
                          <p className={styles.partNumber}>Code: {product.partNumber}</p>
                        )}
                        <p className={styles.productDescription}>
                          {product.description.length > 100 
                            ? `${product.description.slice(0, 100)}...` 
                            : product.description}
                        </p>
                        {product.subcategory && (
                          <span className={styles.subcategoryTag}>{product.subcategory}</span>
                        )}
                        <span className={styles.viewDetails}>
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <Package className="h-16 w-16" />
                <p>Products coming soon...</p>
              </div>
            )}
            {category.products.length > 12 && (
              <div className={styles.viewAllFooter}>
                <Button asChild size="lg">
                  <Link href={`/products?category=${category.slug}`}>
                    View All {category.products.length} Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.ctaContent}
            >
              <h2>Need Custom {category.name}?</h2>
              <p>Contact us for bulk orders, custom specifications, or technical support.</p>
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

  // If not a category, check if it's a product
  const product = getProductBySlug(slug);
  
  if (product) {
    // Find the category for breadcrumb
    const productCategory = productCategories.find(
      cat => cat.products.some(p => p.id === product.id)
    );

    // Get related products
    const relatedProducts = productCategory
      ? productCategory.products.filter(p => p.id !== product.id).slice(0, 4)
      : [];

    return (
      <div className={styles.productPage}>
        <ProductDetailView
          product={product}
          productCategory={productCategory}
          relatedProducts={relatedProducts}
        />
      </div>
    );
  }

  // Neither category nor product found
  notFound();
}

"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  productCategories, 
  getCategoryBySlug,
  getProductBySlug,
} from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Package, Info, Phone } from "lucide-react";
import styles from "./page.module.scss";

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
    // Render category page with all its products
    return (
      <div className={styles.categoryPage}>
        {/* Category Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGlow} />
          </div>
          <div className="container mx-auto px-4 py-16">
            <Button variant="ghost" asChild className={styles.backButton}>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Products
              </Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.heroContent}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h1 className={styles.title}>{category.name}</h1>
              <p className={styles.description}>{category.description}</p>
              <div className={styles.productCount}>
                <Package className="h-5 w-5" />
                <span>{category.products.length} Products</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subcategories if any */}
        {category.subcategories && category.subcategories.length > 0 && (
          <section className={styles.subcategories}>
            <div className="container mx-auto px-4 py-12">
              <h2 className={styles.sectionTitle}>Subcategories</h2>
              <div className={styles.subcategoryGrid}>
                {category.subcategories.map((sub, index) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={styles.subcategoryCard}
                  >
                    <h3>{sub.name}</h3>
                    <p>{sub.description}</p>
                    <span className={styles.count}>{sub.products.length} items</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products Grid */}
        <section className={styles.products}>
          <div className="container mx-auto px-4 py-16">
            <h2 className={styles.sectionTitle}>All {category.name}</h2>
            {category.products.length > 0 ? (
              <div className={styles.productGrid}>
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link href={`/products/${product.slug}`} className={styles.productCard}>
                      <div className={styles.productImage}>
                        <span className={styles.productIcon}>📦</span>
                        {product.featured && (
                          <span className={styles.featuredBadge}>Featured</span>
                        )}
                      </div>
                      <div className={styles.productContent}>
                        <h3 className={styles.productName}>{product.name}</h3>
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
                <Button asChild>
                  <Link href="/contact">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
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

    return (
      <div className={styles.productPage}>
        {/* Product Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGlow} />
          </div>
          <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
              <Link href="/products">Products</Link>
              <span>/</span>
              {productCategory && (
                <>
                  <Link href={`/products/${productCategory.slug}`}>{productCategory.name}</Link>
                  <span>/</span>
                </>
              )}
              <span className={styles.current}>{product.name}</span>
            </nav>
            
            <Button variant="ghost" asChild className={styles.backButton}>
              <Link href={productCategory ? `/products/${productCategory.slug}` : "/products"}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {productCategory?.name || "Products"}
              </Link>
            </Button>
          </div>
        </section>

        {/* Product Details */}
        <section className={styles.productDetails}>
          <div className="container mx-auto px-4 py-12">
            <div className={styles.productLayout}>
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.imageSection}
              >
                <div className={styles.mainImage}>
                  <span className={styles.productIconLarge}>📦</span>
                  {product.featured && (
                    <span className={styles.featuredBadge}>Featured Product</span>
                  )}
                </div>
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
                  <p className={styles.partNumber}>Part #: {product.partNumber}</p>
                )}
                
                <p className={styles.productDesc}>{product.description}</p>

                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className={styles.specifications}>
                    <h3>
                      <Info className="h-5 w-5" />
                      Specifications
                    </h3>
                    <div className={styles.specGrid}>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className={styles.specItem}>
                          <span className={styles.specKey}>{key}</span>
                          <span className={styles.specValue}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className={styles.actions}>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
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
        {productCategory && productCategory.products.length > 1 && (
          <section className={styles.relatedProducts}>
            <div className="container mx-auto px-4 py-16">
              <h2 className={styles.sectionTitle}>Related Products</h2>
              <div className={styles.relatedGrid}>
                {productCategory.products
                  .filter(p => p.id !== product.id)
                  .slice(0, 4)
                  .map((relatedProduct, index) => (
                    <motion.div
                      key={relatedProduct.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link href={`/products/${relatedProduct.slug}`} className={styles.relatedCard}>
                        <div className={styles.relatedImage}>
                          <span>📦</span>
                        </div>
                        <h4>{relatedProduct.name}</h4>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Neither category nor product found
  notFound();
}

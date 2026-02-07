"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredProducts } from "@/config/products.config";
import { testimonials } from "@/config/testimonials.config";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import { ArrowRight, Phone } from "lucide-react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <FeaturesSection />
      <CategoriesSection />
      <ProductGrid products={featuredProducts} />
      
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaGlow} />
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Partner with a Trusted Manufacturer?</h2>
          <p>
            Get in touch with our team to discuss your automotive component requirements.
            We offer competitive pricing and reliable delivery worldwide.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              <Phone className="h-5 w-5" />
              <span>Contact Sales</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

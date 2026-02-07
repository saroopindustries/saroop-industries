"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { features } from "@/config/about.config";
import styles from "./FeaturesSection.module.scss";
import "swiper/css";
import "swiper/css/pagination";

function FeatureCard({
  feature,
  index,
  isInView,
}: {
  feature: (typeof features)[number];
  index: number;
  isInView: boolean;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.featureCard}
    >
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={styles.highlight}>{feature.highlight}</span>
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
      <div className={styles.cardHover} />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.features}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Why Choose Us</span>
          <h2 className={styles.title}>
            Driving Innovation in
            <br />
            <span>Automotive Components</span>
          </h2>
          <p className={styles.subtitle}>
            We combine cutting-edge technology with decades of expertise to deliver 
            automotive solutions that exceed industry standards.
          </p>
        </motion.div>

        {/* Mobile: Slider */}
        <motion.div
          className={styles.sliderWrapper}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            className={styles.slider}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <FeatureCard feature={feature} index={index} isInView={isInView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Desktop: Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Bottom Visual */}
        <motion.div
          className={styles.bottomVisual}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.visualCard}>
            <div className={styles.visualContent}>
              <div className={styles.visualIcon}>
                <Headphones className="h-8 w-8" />
              </div>
              <div className={styles.visualText}>
                <h3>Need Assistance?</h3>
                <p>Our expert team is here to help you find the right components for your needs.</p>
              </div>
              <a href="/contact" className={styles.visualCta}>
                Contact Support
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className={styles.visualGlow} />
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundDecor}>
        <div className={styles.decorCircle1} />
        <div className={styles.decorCircle2} />
      </div>
    </section>
  );
}

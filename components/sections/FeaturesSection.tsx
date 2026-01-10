"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Award, TrendingUp, Cog, Globe, Truck, Headphones } from "lucide-react";
import styles from "./FeaturesSection.module.scss";

const features = [
  {
    icon: Zap,
    title: "Premium Brass Terminals",
    description: "Precision-engineered using high-quality brass for excellent conductivity and long-lasting performance.",
    highlight: "High Conductivity",
  },
  {
    icon: Shield,
    title: "Corrosion Resistant",
    description: "Advanced surface treatment ensures protection against environmental factors and extended product life.",
    highlight: "Durable Design",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "ISO 9001:2015 certified manufacturing processes guarantee consistent quality in every product.",
    highlight: "ISO Certified",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Tailored automotive components designed to meet your specific requirements and applications.",
    highlight: "Made to Order",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers across 50+ countries with reliable international shipping and support.",
    highlight: "50+ Countries",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Efficient logistics and inventory management ensure timely delivery of all orders.",
    highlight: "Quick Turnaround",
  },
];

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

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
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
          })}
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

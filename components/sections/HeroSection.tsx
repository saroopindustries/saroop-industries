"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Play, ChevronDown, Zap, Shield, Award } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import styles from "./HeroSection.module.scss";

const features = [
  { icon: Zap, text: "High Conductivity" },
  { icon: Shield, text: "Corrosion Resistant" },
  { icon: Award, text: "Quality Certified" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.backgroundWrapper}>
        <motion.div className={styles.gradientOrb1} style={{ y }} />
        <motion.div className={styles.gradientOrb2} style={{ y }} />
        <div className={styles.gridPattern} />
        <div className={styles.noiseOverlay} />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column - Text */}
            <motion.div
              className={styles.textColumn}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className={styles.badgeDot} />
                <span>Leading Automotive Component Manufacturer</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className={styles.headline}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className={styles.headlineAccent}>Precision</span>
                <br />
                <span>Automotive</span>
                <br />
                <span className={styles.headlineGradient}>Solutions</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Engineering excellence in brass terminals, battery cables, and electrical components. 
                Trusted by automotive manufacturers worldwide for quality and reliability.
              </motion.p>

              {/* Features */}
              <motion.div
                className={styles.featuresList}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <feature.icon className="h-4 w-4" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className={styles.ctaGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link href="/products" className={styles.primaryCta}>
                  <span>Explore Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className={styles.secondaryCta}>
                  <Download className="h-5 w-5" />
                  <span>Download Brochure</span>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className={styles.trustIndicators}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>10+</span>
                  <span className={styles.trustLabel}>Years Experience</span>
                </div>
                <div className={styles.trustDivider} />
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>500+</span>
                  <span className={styles.trustLabel}>Products</span>
                </div>
                <div className={styles.trustDivider} />
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>50+</span>
                  <span className={styles.trustLabel}>Countries</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className={styles.visualColumn}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.visualWrapper}>
                {/* Main Visual Card */}
                <div className={styles.mainVisual}>
                  <div className={styles.visualGlow} />
                  <div className={styles.visualContent}>
                    <div className={styles.visualIcon}>
                      <Zap className="h-12 w-12" />
                    </div>
                    <h3>BRASS TERMINALS</h3>
                    <p>Precision-engineered for excellence</p>
                  </div>
                  
                  {/* Floating Cards */}
                  <motion.div
                    className={`${styles.floatingCard} ${styles.card1}`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className={styles.floatingIcon}>⚡</span>
                    <span>High Conductivity</span>
                  </motion.div>

                  <motion.div
                    className={`${styles.floatingCard} ${styles.card2}`}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <span className={styles.floatingIcon}>🛡️</span>
                    <span>ISO Certified</span>
                  </motion.div>

                  <motion.div
                    className={`${styles.floatingCard} ${styles.card3}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <span className={styles.floatingIcon}>🌍</span>
                    <span>Global Export</span>
                  </motion.div>
                </div>

                {/* Background Decorations */}
                <div className={styles.decorCircle1} />
                <div className={styles.decorCircle2} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { companyInfo } from "@/config/site.config";
import { TrendingUp, Package, Users, Globe, Award, Clock } from "lucide-react";
import styles from "./StatsSection.module.scss";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateValue = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * value);
        
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };

      requestAnimationFrame(updateValue);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

const stats = [
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
    description: "Industry experience",
    color: "#f97316",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    label: "Products",
    description: "In our catalog",
    color: "#3b82f6",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
    description: "Worldwide",
    color: "#10b981",
  },
  {
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries",
    description: "Global reach",
    color: "#8b5cf6",
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.stats}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern} />
      
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our Impact</span>
          <h2 className={styles.title}>
            Numbers That <span>Speak</span>
          </h2>
          <p className={styles.subtitle}>
            A decade of delivering quality automotive components to customers worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.statCard}
              >
                <div 
                  className={styles.iconWrapper}
                  style={{ '--stat-color': stat.color } as React.CSSProperties}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
                <div 
                  className={styles.cardGlow}
                  style={{ '--stat-color': stat.color } as React.CSSProperties}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Award className="h-5 w-5" />
          <span>ISO 9001:2015 Certified | Quality Assured Products</span>
        </motion.div>
      </div>
    </section>
  );
}

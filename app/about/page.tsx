"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { companyInfo, siteConfig } from "@/config/site.config";
import { Award, Target, Eye, TrendingUp, Download, Phone, Shield, Clock, Users, Globe } from "lucide-react";
import Link from "next/link";
import { TypingAnimation } from "@/components/ui/typing-animation";
import styles from "./page.module.scss";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Ensure video plays on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: companyInfo.mission,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: companyInfo.vision,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest quality standards in all our products, ensuring customer satisfaction and reliability.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously innovating to bring the best solutions for the automotive industry.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "ISO 45001:2018", description: "Health & Safety Management" },
    { name: "IATF 16949:2016", description: "Automotive Quality" },
    { name: "CE", description: "European Conformity" },
    { name: "RoHS", description: "Hazardous Substances" },
    { name: "UL", description: "Safety Certification" },
    { name: "CSA", description: "Canadian Standards" },
    { name: "WHO GMP", description: "Good Manufacturing Practice" },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Saroop Industries launched with a vision to transform automotive manufacturing",
      icon: Users,
    },
    {
      year: "2017",
      title: "ISO Certified",
      description: "Achieved ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications",
      icon: Shield,
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Opened branch office in Canada, serving 50+ countries worldwide",
      icon: Globe,
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "500+ products serving 1000+ happy customers with cutting-edge technology",
      icon: Award,
    },
  ];

  const stats = [
    { value: parseInt(companyInfo.experience), label: "Years of Experience", suffix: "+" },
    { value: 500, label: "Products", suffix: "+" },
    { value: 1000, label: "Happy Customers", suffix: "+" },
    { value: 50, label: "Countries", suffix: "+" },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section with Parallax */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div className={styles.heroBackground} style={{ y }}>
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/gallery.jpg"
          >
            <source src="/about/hero-video.mp4" type="video/mp4" />
            <source src="/about/hero-video.webm" type="video/webm" />
          </video>
          <noscript>
            <img src="/gallery.jpg" alt="Saroop Industries Manufacturing" />
          </noscript>
        </motion.div>
        <div className={styles.heroOverlay} />
        
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            style={{ opacity }}
            className={styles.heroContent}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.badge}
            >
              About Us
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <TypingAnimation
                text="Driving Innovation, Powering Performance"
                duration={80}
                className={styles.title}
                as="h1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.8 }}
            >
              <TypingAnimation
                text="Quality-first manufacturer delivering reliable, precision-engineered automotive components"
                duration={40}
                className={styles.subtitle}
                as="p"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className={styles.about}>
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className={styles.aboutGrid}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.aboutContent}
            >
              <h2 className={styles.sectionTitle}>Depending on your needs</h2>
              <p className={styles.description}>{companyInfo.about}</p>
              
              <div className={styles.highlights}>
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={styles.highlight}
                >
                  <Shield className={styles.highlightIcon} />
                  <div>
                    <h4>Robust Process Control</h4>
                    <p>Advanced Taiwan-made machinery ensuring precision</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={styles.highlight}
                >
                  <Award className={styles.highlightIcon} />
                  <div>
                    <h4>Global Quality Standards</h4>
                    <p>Internationally recognized certifications</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.aboutImage}
            >
              <div className={styles.certificationShowcase}>
                <div className={styles.certBadges}>
                  <div className={styles.certRow}>
                    <div className={styles.certBadge}>ISO<br/>9001:2015</div>
                    <div className={styles.certBadge}>ISO<br/>14001:2015</div>
                    <div className={styles.certBadge}>ISO<br/>45001:2018</div>
                  </div>
                  <div className={styles.certRow}>
                    <div className={styles.certBadge}>IATF<br/>16949</div>
                    <div className={styles.certBadge}>CE</div>
                  </div>
                  <div className={styles.certRow}>
                    <div className={styles.certBadge}>RoHS</div>
                    <div className={styles.certBadge}>UL</div>
                    <div className={styles.certBadge}>CSA</div>
                    <div className={styles.certBadge}>WHO<br/>GMP</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className={styles.stats}>
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => {
              const [ref, inView] = useInView({
                threshold: 0.5,
                triggerOnce: true,
              });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.statItem}
                >
                  <div className={styles.statValue}>
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento Grid Values Section */}
      <section className={styles.values}>
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.valuesHeader}
          >
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.description}>
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className={styles.bentoGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${styles.bentoCard} ${styles[`bento${index + 1}`]}`}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.cardBorder} />
                  <div className={styles.cardContent}>
                    <motion.div 
                      className={styles.iconWrapper}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={styles.icon} />
                    </motion.div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.timelineHeader}
          >
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.description}>
              Milestones that shaped Saroop Industries
            </p>
          </motion.div>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine} />
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                >
                  <div className={styles.timelineDot}>
                    <Icon className={styles.timelineIcon} />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marquee Certifications */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeHeader}>
          <h2 className={styles.sectionTitle}>Certified Excellence</h2>
          <p className={styles.description}>
            Internationally recognized quality standards
          </p>
        </div>
        
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marqueeTrack}
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...certifications, ...certifications, ...certifications].map((cert, index) => (
              <div key={index} className={styles.marqueeCard}>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground} />
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>Ready to Work With Us?</h2>
            <p className={styles.ctaDescription}>
              Get our comprehensive catalog or reach out to discuss your automotive component needs
            </p>
            
            <div className={styles.ctaButtons}>
              <motion.a
                href={siteConfig.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shimmerButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.shimmer} />
                <Download className={styles.buttonIcon} />
                Download Catalog
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.contactButton}>
                  <Phone className={styles.buttonIcon} />
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

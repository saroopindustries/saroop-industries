"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState, useRef, useEffect, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { companyInfo, siteConfig } from "@/config/site.config";
import { Award, Target, Eye, TrendingUp, Download, Phone, Shield, Clock, Users, Globe, Package } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

// Lazy load heavy components with loading states
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { 
  ssr: false,
  loading: () => null 
});
const DottedMap = dynamic(
  () => import("@/components/ui/dotted-map").then(mod => mod.DottedMap), 
  { ssr: false, loading: () => null }
);
const Marquee = dynamic(
  () => import("@/components/ui/marquee").then(mod => mod.Marquee), 
  { ssr: false, loading: () => <div className="h-20" /> }
);
const CountUp = dynamic(() => import("react-countup"), { 
  ssr: false,
  loading: () => <span>0</span>
});

// Regular imports for Swiper (needed for SSR)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import styles only on client
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Static data moved outside component to prevent re-creation
const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: companyInfo.mission,
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: companyInfo.vision,
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest quality standards in all our products, ensuring customer satisfaction and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously innovating to bring the best solutions for the automotive industry.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management", logoSrc: "/about/certs/iso-9001.svg", certificateSrc: "/about/certificates/iso-9001.jpg" },
  { name: "ISO 14001:2015", description: "Environmental Management", logoSrc: "/about/certs/iso-14001.svg", certificateSrc: "/about/certificates/iso-14001.jpg" },
  { name: "ISO 45001:2018", description: "Health & Safety Management", logoSrc: "/about/certs/iso-45001.svg", certificateSrc: "/about/certificates/iso-45001.jpg" },
  { name: "IATF 16949:2016", description: "Automotive Quality", logoSrc: "/about/certs/iatf-16949.svg", certificateSrc: "/about/certificates/iatf-16949.jpg" },
  { name: "CE", description: "European Conformity", logoSrc: "/about/certs/ce.svg", certificateSrc: "/about/certificates/ce.jpg" },
  { name: "RoHS", description: "Hazardous Substances", logoSrc: "/about/certs/rohs.svg", certificateSrc: "/about/certificates/rohs.jpg" },
  { name: "UL", description: "Safety Certification", logoSrc: "/about/certs/ul.svg" },
  { name: "CSA", description: "Canadian Standards", logoSrc: "/about/certs/csa.svg" },
  { name: "WHO GMP", description: "Good Manufacturing Practice", logoSrc: "/about/certs/who-gmp.svg", certificateSrc: "/about/certificates/who-gmp.jpg" },
];

const timeline = [
  { year: "2015", title: "Company Founded", description: "Saroop Industries launched with a vision to transform automotive manufacturing", icon: Users },
  { year: "2017", title: "ISO Certified", description: "Achieved ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications", icon: Shield },
  { year: "2020", title: "Global Expansion", description: "Opened branch office in Canada, serving 50+ countries worldwide", icon: Globe },
  { year: "2025", title: "Industry Leader", description: "500+ products serving 1000+ happy customers with cutting-edge technology", icon: Award },
];

const stats = [
  { icon: Clock, value: parseInt(companyInfo.experience), suffix: "+", label: "Years of Excellence", description: "Industry experience", color: "#93c967" },
  { icon: Package, value: 500, suffix: "+", label: "Products", description: "In our catalog", color: "#3b82f6" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Customers", description: "Worldwide", color: "#10b981" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries", description: "Global reach", color: "#8b5cf6" },
];

const mapMarkers = [
  { lat: 28.6139, lng: 77.209, size: 0.5 },
  { lat: 43.6532, lng: -79.3832, size: 0.4 },
  { lat: 40.7128, lng: -74.006, size: 0.3 },
  { lat: 51.5074, lng: -0.1278, size: 0.3 },
  { lat: 35.6762, lng: 139.6503, size: 0.3 },
  { lat: -33.8688, lng: 151.2093, size: 0.3 },
  { lat: 25.2048, lng: 55.2708, size: 0.3 },
  { lat: 1.3521, lng: 103.8198, size: 0.3 },
];

const certificateEntries = certifications.filter((c) => !!c.certificateSrc);

// Separate StatCard component to fix hooks issue
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.statCard}
    >
      <div 
        className={styles.statIconWrapper}
        style={{ '--stat-color': stat.color } as React.CSSProperties}
      >
        <Icon className={styles.statIcon} />
      </div>
      <div className={styles.statContent}>
        <div className={styles.statValue}>
          {inView ? (
            <Suspense fallback={<span>{stat.value}{stat.suffix}</span>}>
              <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />
            </Suspense>
          ) : (
            <span>0{stat.suffix}</span>
          )}
        </div>
        <h3 className={styles.statLabel}>{stat.label}</h3>
        <p className={styles.statDescription}>{stat.description}</p>
      </div>
      <div 
        className={styles.statCardGlow}
        style={{ '--stat-color': stat.color } as React.CSSProperties}
      />
      <BorderBeam 
        size={200}
        duration={12}
        delay={index * 2}
        colorFrom={stat.color}
        colorTo={stat.color}
        borderWidth={2}
      />
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [certLogoFailed, setCertLogoFailed] = useState<Record<string, boolean>>({});
  const [certLightboxIndex, setCertLightboxIndex] = useState<number>(-1);
  const [isClient, setIsClient] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Hydration fix
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Lazy load video
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = () => {
        videoRef.current?.play().catch(() => setVideoError(true));
      };
      // Delay video play to prioritize other content
      const timer = setTimeout(playVideo, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const markCertLogoFailed = (name: string) => {
    setCertLogoFailed((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
  };

  const certificateSlides = useMemo(
    () => certificateEntries.map((c) => ({
      src: c.certificateSrc as string,
      alt: `${c.name} certificate`,
      width: 1400,
      height: 2000,
      title: c.name,
      description: c.description,
    })),
    []
  );

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section with Parallax */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div className={styles.heroBackground} style={{ y }}>
          {/* Video Background */}
          {videoError ? (
            <img
              className={styles.heroFallback}
              src="/gallery.jpg"
              alt="Saroop Industries Manufacturing"
            />
          ) : (
            <video
              ref={videoRef}
              className={styles.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/gallery.jpg"
              onError={() => setVideoError(true)}
            >
              <source src="/about/hero-video.mp4" type="video/mp4" />
            </video>
          )}
          <noscript>
            <img
              className={styles.heroFallback}
              src="/gallery.jpg"
              alt="Saroop Industries Manufacturing"
            />
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
                <div className={styles.certificationHeader}>
                  <h3>Certifications</h3>
                  <p>Internationally recognized quality standards</p>
                </div>

                <div className={styles.certCarousel}>
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {certifications.map((cert) => {
                      const showLogo = !!cert.logoSrc && !certLogoFailed[cert.name];
                      const canOpen = !!cert.certificateSrc;
                      const slideIndex = canOpen
                        ? certificateEntries.findIndex((c) => c.name === cert.name)
                        : -1;

                      return (
                        <SwiperSlide key={cert.name}>
                          <button
                            type="button"
                            className={`${styles.certCard} ${canOpen ? styles.certCardClickable : styles.certCardDisabled}`}
                            onClick={() => {
                              if (slideIndex >= 0) setCertLightboxIndex(slideIndex);
                            }}
                            aria-label={canOpen ? `View ${cert.name} certificate` : `${cert.name} certificate not available`}
                            aria-disabled={!canOpen}
                          >
                            <div className={styles.certLogoWrap}>
                              {showLogo ? (
                                <Image
                                  src={cert.logoSrc}
                                  alt={`${cert.name} certification logo`}
                                  width={64}
                                  height={64}
                                  className={styles.certLogo}
                                  onError={() => markCertLogoFailed(cert.name)}
                                />
                              ) : (
                                <div className={styles.certLogoFallback}>{cert.name}</div>
                              )}
                            </div>
                            <div className={styles.certCardBody}>
                              <div className={styles.certName}>{cert.name}</div>
                              <div className={styles.certDesc}>{cert.description}</div>
                              {!canOpen && <div className={styles.certHint}>Certificate coming soon</div>}
                            </div>
                          </button>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className={styles.stats}>
        <div className={styles.statsBackgroundPattern} />
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.statsHeader}
          >
            <span className={styles.statsLabel}>Our Impact</span>
            <h2 className={styles.statsTitle}>
              Numbers That <span>Speak</span>
            </h2>
            <p className={styles.statsSubtitle}>
              A decade of delivering quality automotive components to customers worldwide
            </p>
          </motion.div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={styles.statsBottomCta}
          >
            <Award className={styles.statsCtaIcon} />
            <span>ISO 9001:2015 Certified | Quality Assured Products</span>
          </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.marqueeHeader}
        >
          <h2 className={styles.sectionTitle}>Certified Excellence</h2>
          <p className={styles.description}>
            Internationally recognized quality standards
          </p>
        </motion.div>
        
        <div className={styles.marqueeContainer}>
          <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
            {certifications.map((cert, index) => (
              <div key={index} className={styles.marqueeCard}>
                <div className={styles.marqueeCardIcon}>
                  {cert.logoSrc ? (
                    <Image
                      src={cert.logoSrc}
                      alt={`${cert.name} logo`}
                      width={32}
                      height={32}
                      className={styles.certLogoImg}
                    />
                  ) : (
                    <Award className={styles.certIcon} />
                  )}
                </div>
                <div className={styles.marqueeCardContent}>
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:1.5rem] mt-4">
            {certifications.map((cert, index) => (
              <div key={index} className={styles.marqueeCard}>
                <div className={styles.marqueeCardIcon}>
                  {cert.logoSrc ? (
                    <Image
                      src={cert.logoSrc}
                      alt={`${cert.name} logo`}
                      width={32}
                      height={32}
                      className={styles.certLogoImg}
                    />
                  ) : (
                    <Shield className={styles.certIcon} />
                  )}
                </div>
                <div className={styles.marqueeCardContent}>
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground} />
        <div className={styles.ctaMapBackground}>
          <DottedMap 
            markers={mapMarkers}
            markerColor="rgba(255, 255, 255, 0.7)"
            dotRadius={0.35}
            dotColor="rgba(255, 255, 255, 0.2)"
          />
        </div>
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

      {/* Certifications Lightbox */}
      {certLightboxIndex >= 0 && (
        <Lightbox
          open={true}
          close={() => setCertLightboxIndex(-1)}
          index={certLightboxIndex}
          slides={certificateSlides}
        />
      )}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { LazyMotion, domAnimation, motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Award,
  Download,
  Eye,
  Globe,
  Package,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

import { companyInfo, siteConfig } from "@/config/site.config";
import { aboutValues, certifications, timeline, stats, mapMarkers } from "@/config/about.config";
import { BorderBeam } from "@/components/ui/border-beam";
import { TypingAnimation } from "@/components/ui/typing-animation";
import ClientsSection from "@/components/sections/ClientsSection";
import styles from "./page.module.scss";

// Lazy / dynamic components
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false, loading: () => null });
const DottedMap = dynamic(() => import("@/components/ui/dotted-map").then((m) => m.DottedMap), {
  ssr: false,
  loading: () => null,
});
const Marquee = dynamic(() => import("@/components/ui/marquee").then((m) => m.Marquee), {
  ssr: false,
  loading: () => <div className="h-20" />,
});
const CountUp = dynamic(() => import("react-countup"), { ssr: false, loading: () => <span>0</span> });
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/pagination";

// ------------------------------
// Static data now imported from config
// ------------------------------

const certificateEntries = certifications.filter((c) => !!c.certificateSrc);

// ------------------------------
// Helpers
// ------------------------------
function MountOnView({
  children,
  minHeight = 200,
  rootMargin = "200px 0px",
}: {
  children: React.ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });
  return (
    <div ref={ref} style={{ minHeight }}>
      {inView ? children : null}
    </div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={styles.statCard}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className={styles.statIconWrapper} style={{ "--stat-color": stat.color } as React.CSSProperties}>
        <Icon className={styles.statIcon} />
      </div>

      <div className={styles.statContent}>
        <div className={styles.statValue}>
          {inView ? (
            <Suspense fallback={<span>{stat.value}{stat.suffix}</span>}>
              <CountUp end={stat.value} duration={1.8} separator="," suffix={stat.suffix} />
            </Suspense>
          ) : (
            <span>0{stat.suffix}</span>
          )}
        </div>
        <h3 className={styles.statLabel}>{stat.label}</h3>
        <p className={styles.statDescription}>{stat.description}</p>
      </div>

      <div className={styles.statCardGlow} style={{ "--stat-color": stat.color } as React.CSSProperties} />

      {/* IMPORTANT: BorderBeam only on hover (saves a lot of GPU on initial load) */}
      {hovered && (
        <BorderBeam
          size={180}
          duration={10}
          delay={0}
          colorFrom={stat.color}
          colorTo={stat.color}
          borderWidth={2}
        />
      )}
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoError, setVideoError] = useState(false);
  const [certLogoFailed, setCertLogoFailed] = useState<Record<string, boolean>>({});
  const [certLightboxIndex, setCertLightboxIndex] = useState<number>(-1);

  // Hero in-view gate (video play/pause + keep main thread free)
  const { ref: heroInViewRef, inView: heroInView } = useInView({
    threshold: 0.2,
    rootMargin: "200px 0px",
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (videoError) return;

    if (heroInView) {
      v.play().catch(() => setVideoError(true));
    } else {
      v.pause();
    }
  }, [heroInView, videoError]);

  const markCertLogoFailed = (name: string) => {
    setCertLogoFailed((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
  };

  const certificateSlides = useMemo(
    () =>
      certificateEntries.map((c) => ({
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
    <LazyMotion features={domAnimation}>
      <div className={styles.aboutPage}>
        {/* Hero Section with Parallax */}
        <section
          className={styles.hero}
          ref={(node) => {
            if (heroRef.current) {
              (heroRef.current as HTMLDivElement).style.minHeight = "70vh";
            }
            heroInViewRef(node);
          }}
        >
          <motion.div className={styles.heroBackground} style={{ y }}>
            {videoError ? (
              <div className={styles.heroFallbackWrap}>
                <Image
                  src="/machine-manufacturing.jpg"
                  alt="Saroop Industries Manufacturing"
                  fill
                  priority
                  sizes="100vw"
                  className={styles.heroFallback}
                />
              </div>
            ) : (
              <video
                ref={videoRef}
                className={styles.heroVideo}
                loop
                muted
                playsInline
                preload="none"
                poster="/machine-manufacturing.jpg"
                onError={() => setVideoError(true)}
              >
                <source src="/about/hero-video.mp4" type="video/mp4" />
              </video>
            )}
          </motion.div>

          <div className={styles.heroOverlay} />

          <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
            <motion.div style={{ opacity }} className={styles.heroContent}>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className={styles.badge}
              >
                About Us
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                <TypingAnimation
                  text="Driving Innovation, Powering Performance"
                  duration={40} // faster = less time animating
                  className={styles.title}
                  as="h1"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.1 }} // reduce delay (and time animating)
              >
                <TypingAnimation
                  text="Quality-first manufacturer delivering reliable, precision-engineered automotive components"
                  duration={18}
                  className={styles.subtitle}
                  as="p"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Content Section */}
        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={styles.aboutContent}
              >
                <h2 className={styles.sectionTitle}>Depending on your needs</h2>
                <p className={`${styles.description} ${styles.aboutText}`}>{companyInfo.about}</p>

                <div className={styles.highlights}>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 16 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
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
                    initial={{ opacity: 0, y: 16 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.22 }}
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

              {/* Certifications list */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={styles.aboutImage}
              >
                <div className={styles.certificationShowcase}>
                  <div className={styles.certificationHeader}>
                    <h3>Certifications</h3>
                    <p>Internationally recognized quality standards</p>
                  </div>

                  <div className={styles.certList}>
                    {certifications.map((cert) => {
                      const showLogo = !!cert.logoSrc && !certLogoFailed[cert.name];
                      const canOpen = !!cert.certificateSrc;
                      const slideIndex = canOpen
                        ? certificateEntries.findIndex((c) => c.name === cert.name)
                        : -1;

                      return (
                        <button
                          key={cert.name}
                          type="button"
                          className={`${styles.certCard} ${
                            canOpen ? styles.certCardClickable : styles.certCardDisabled
                          }`}
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
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Counter */}
        <section className={styles.stats}>
          <div className={styles.statsBackgroundPattern} />
          <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={styles.statsBottomCta}
            >
              <Award className={styles.statsCtaIcon} />
              <span>ISO 9001:2015 Certified | Quality Assured Products</span>
            </motion.div>
          </div>
        </section>

                {/* Trusted Clients Section */}
                <ClientsSection />

        {/* Values Section */}
        <section className={styles.values}>
          <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.valuesHeader}
            >
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
              <p className={styles.description}>The principles that guide everything we do</p>
            </motion.div>

            {/* Mobile: Slider */}
            <div className={styles.valuesSliderWrapper}>
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1.15}
                pagination={{ clickable: true }}
                className={styles.valuesSlider}
              >
                {aboutValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <SwiperSlide key={index}>
                      <div className={`${styles.bentoCard} ${styles[`bento${index + 1}`]}`}>
                        <div className={styles.cardGlow} />
                        <div className={styles.cardBorder} />
                        <div className={styles.cardContent}>
                          <div className={styles.iconWrapper}>
                            <Icon className={styles.icon} />
                          </div>
                          <h3 className={styles.valueTitle}>{value.title}</h3>
                          <p className={styles.valueDescription}>{value.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Desktop: Grid */}
            <div className={styles.bentoGrid}>
              {aboutValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`${styles.bentoCard} ${styles[`bento${index + 1}`]}`}
                  >
                    <div className={styles.cardGlow} />
                    <div className={styles.cardBorder} />
                    <div className={styles.cardContent}>
                      <div className={styles.iconWrapper}>
                        <Icon className={styles.icon} />
                      </div>
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
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.timelineHeader}
            >
              <h2 className={styles.sectionTitle}>Our Journey</h2>
              <p className={styles.description}>Milestones that shaped Saroop Industries</p>
            </motion.div>

            <div className={styles.timelineContainer}>
              <div className={styles.timelineLine} />

              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
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

        {/* Marquee Certifications (mounted only when in view) */}
        <section className={styles.marqueeSection}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.marqueeHeader}
          >
            <h2 className={styles.sectionTitle}>Certified Excellence</h2>
            <p className={styles.description}>Internationally recognized quality standards</p>
          </motion.div>

          <MountOnView minHeight={220}>
            <div className={styles.marqueeContainer}>
              <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
                {certifications.map((cert, index) => (
                  <div key={index} className={styles.marqueeCard}>
                    <div className={styles.marqueeCardIcon}>
                      {cert.logoSrc ? (
                        <Image src={cert.logoSrc} alt={`${cert.name} logo`} width={32} height={32} className={styles.certLogoImg} />
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
                        <Image src={cert.logoSrc} alt={`${cert.name} logo`} width={32} height={32} className={styles.certLogoImg} />
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
          </MountOnView>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaBackground} />

          {/* Dotted map mounted only when in view */}
          <div className={styles.ctaMapBackground}>
            <MountOnView minHeight={380}>
              <DottedMap
                width={600}
                height={300}
                mapSamples={8000}
                markers={mapMarkers}
                markerColor="rgba(255, 255, 255, 0.95)"
                dotRadius={0.4}
                dotColor="rgba(255, 255, 255, 0.5)"
              />
            </MountOnView>
          </div>

          <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.shimmer} />
                  <Download className={styles.buttonIcon} />
                  Download Catalog
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
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
    </LazyMotion>
  );
}

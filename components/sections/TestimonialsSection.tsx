"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Testimonial } from "@/config/testimonials.config";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./TestimonialsSection.module.scss";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.testimonials}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.pattern} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>
            Trusted by <span>Industry Leaders</span>
          </h2>
          <p className={styles.subtitle}>
            See what our customers say about their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className={styles.swiperWrapper}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: `.${styles.customPagination}`,
            }}
            navigation={{
              prevEl: `.${styles.navPrev}`,
              nextEl: `.${styles.navNext}`,
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  {/* Quote Icon */}
                  <div className={styles.quoteIcon}>
                    <Quote className="h-6 w-6" />
                  </div>

                  {/* Stars */}
                  <div className={styles.stars}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className={styles.star} fill="currentColor" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className={styles.comment}>{testimonial.comment}</p>

                  {/* Author */}
                  <div className={styles.author}>
                    <div className={styles.authorAvatar}>
                      <span>{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorLocation}>{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Decorative */}
                  <div className={styles.cardAccent} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className={styles.navigation}>
            <button className={styles.navPrev}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className={styles.customPagination} />
            <button className={styles.navNext}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className={styles.trustBadges}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeValue}>4.9</span>
            <div className={styles.badgeContent}>
              <div className={styles.badgeStars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5" fill="currentColor" />
                ))}
              </div>
              <span className={styles.badgeLabel}>Average Rating</span>
            </div>
          </div>
          <div className={styles.badgeDivider} />
          <div className={styles.badge}>
            <span className={styles.badgeValue}>1000+</span>
            <div className={styles.badgeContent}>
              <span className={styles.badgeLabel}>Happy Customers</span>
            </div>
          </div>
          <div className={styles.badgeDivider} />
          <div className={styles.badge}>
            <span className={styles.badgeValue}>50+</span>
            <div className={styles.badgeContent}>
              <span className={styles.badgeLabel}>Countries Served</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

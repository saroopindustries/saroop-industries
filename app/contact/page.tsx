"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { MapPin, Phone, Mail, Clock, Download, Globe, PhoneCall } from "lucide-react";
import styles from "./page.module.scss";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'india' | 'canada'>('india');

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.badge}>Contact Us</span>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.description}>
              Have a question or need a quote? We&apos;re here to help with all your automotive component needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.contactInfo}
            >
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.sectionDescription}>
                Reach out to us through any of the following channels. We respond to all inquiries within 24 hours.
              </p>

              {/* Head Office */}
              <div className={styles.officeSection}>
                <h3 className={styles.officeTitle}>
                  <Globe className="h-5 w-5" />
                  Head Office - India
                </h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                      <p>{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Phone className={styles.icon} />
                    <div>
                      <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <PhoneCall className={styles.icon} />
                    <div>
                      <span>Toll Free: {siteConfig.tollFree}</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Mail className={styles.icon} />
                    <div>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className={styles.officeSection}>
                <h3 className={styles.officeTitle}>
                  <Globe className="h-5 w-5" />
                  Branch Office - Canada
                </h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                      <p>{siteConfig.branchOffice.address}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Phone className={styles.icon} />
                    <div>
                      <a href={`tel:${siteConfig.branchOffice.phone}`}>{siteConfig.branchOffice.phone}</a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Mail className={styles.icon} />
                    <div>
                      <a href={`mailto:${siteConfig.branchOffice.email}`}>{siteConfig.branchOffice.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className={styles.businessHours}>
                <div className={styles.infoItem}>
                  <Clock className={styles.icon} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Download Brochure CTA */}
              <div className={styles.brochureCta}>
                <h3>Product Catalog</h3>
                <p>Download our complete product catalog with specifications and pricing.</p>
                <a 
                  href={siteConfig.brochureUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  <Download className="h-5 w-5" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </div>
            </motion.div>

            {/* Map Section with Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.mapSection}
            >
              {/* Map Tabs */}
              <div className={styles.mapTabs}>
                <button
                  className={`${styles.mapTab} ${activeTab === 'india' ? styles.active : ''}`}
                  onClick={() => setActiveTab('india')}
                >
                  <Globe className="h-4 w-4" />
                  India Office
                </button>
                <button
                  className={`${styles.mapTab} ${activeTab === 'canada' ? styles.active : ''}`}
                  onClick={() => setActiveTab('canada')}
                >
                  <Globe className="h-4 w-4" />
                  Canada Office
                </button>
              </div>

              {/* Map Container */}
              <div className={styles.mapContainer}>
                {activeTab === 'india' && (
                  <motion.iframe
                    key="india-map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7892145845!2d77.1103!3d28.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a5e9e9e9d%3A0x0!2sMangolpuri%20Industrial%20Area%20Phase%20II%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saroop Industries India Location"
                  />
                )}
                {activeTab === 'canada' && (
                  <motion.iframe
                    key="canada-map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.0123456789!2d-79.6234567!3d43.5890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s579+Candlestick+Circle%2C+Mississauga%2C+Ontario!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saroop Industries Canada Location"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

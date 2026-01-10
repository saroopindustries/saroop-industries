"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { MapPin, Phone, Mail, Clock, Download, Globe, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
        </div>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.badge}>Contact Us</span>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.description}>
              Have a question or need a quote? We're here to help with all your automotive component needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className="container mx-auto px-4 py-20">
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.contactForm}
            >
              <h2 className={styles.formTitle}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject *</label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className={styles.submitButton}>
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.mapWrapper}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7892145845!2d77.1103!3d28.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a5e9e9e9d%3A0x0!2sMangolpuri%20Industrial%20Area%20Phase%20II%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saroop Industries Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

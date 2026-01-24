"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Globe,
  Clock,
  Send
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { navigationConfig } from "@/config/navigation.config";
import styles from "./Footer.module.scss";

export default function Footer() {
  const productCategories = navigationConfig.find(item => item.title === "Products")?.children || [];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for latest products and industry updates</p>
            </div>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputWrapper}>
                <Mail className="h-5 w-5" />
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className={styles.emailInput}
                />
              </div>
              <button type="submit" className={styles.subscribeButton}>
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerSection}>
              <Link href="/" className={styles.footerLogo}>
                <Image 
                  src="/logo.png" 
                  alt="Saroop Industries" 
                  width={160} 
                  height={45} 
                  className={styles.logoImage}
                />
              </Link>
              <p className={styles.companyDescription}>
                Leading manufacturer of precision-engineered automotive components. 
                Delivering quality brass terminals, battery cables, and electrical solutions since 2015.
              </p>
              <div className={styles.socialLinks}>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Products</h4>
              <ul className={styles.footerLinks}>
                {productCategories.slice(0, 8).map((category) => (
                  <li key={category.href}>
                    <Link href={category.href}>
                      <ArrowRight className="h-3.5 w-3.5" />
                      {category.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/products" className={styles.viewAll}>
                    View All Products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                {navigationConfig.filter(item => !item.children).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <ArrowRight className="h-3.5 w-3.5" />
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact">
                    <ArrowRight className="h-3.5 w-3.5" />
                    Request a Quote
                  </Link>
                </li>
                <li>
                  <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-3.5 w-3.5" />
                    Download Brochure
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <ul className={styles.contactInfo}>
                <li>
                  <div className={styles.contactIcon}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>{siteConfig.address}</span>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <Globe className="h-4 w-4" />
                  </div>
                  <span>Serving 50+ Countries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} {siteConfig.name}. All Rights Reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms">Terms of Service</Link>
              <span>|</span>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

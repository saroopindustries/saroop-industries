"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import CartButton from "@/components/cart/CartButton";
import styles from "./Header.module.scss";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="Saroop Industries" 
              width={180} 
              height={50} 
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigationConfig.map((item) => (
              item.children ? (
                <div
                  key={item.href}
                  className={styles.navItemWithDropdown}
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${pathname === item.href || pathname.startsWith(item.href + '/') ? styles.active : ""}`}
                  >
                    {item.title}
                    <ChevronDown className={styles.chevron} />
                  </Link>
                  
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={styles.megaMenu}
                      >
                        <div className={styles.megaMenuContainer}>
                          <div className={styles.megaMenuGrid}>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={styles.categoryCard}
                              >
                                <h4 className={styles.categoryTitle}>{child.title}</h4>
                                <p className={styles.categoryDesc}>{child.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href || pathname.startsWith(item.href + '/') ? styles.active : ""}`}
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <CartButton />
            <Link href="/contact" className={styles.ctaButton}>
              <span>Get Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.mobileOverlay}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuHeader}>
                <Link href="/" className={styles.mobileLogo} onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/logo.png" 
                    alt="Saroop Industries" 
                    width={150} 
                    height={42} 
                    className={styles.logoImage}
                  />
                </Link>
                <button
                  className={styles.closeButton}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className={styles.mobileMenuBody}>
                {navigationConfig.map((item) => (
                  <div key={item.href} className={styles.mobileNavItem}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileNavLink} ${pathname === item.href || pathname.startsWith(item.href + '/') ? styles.active : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.title}</span>
                      {item.children && <ChevronDown className={styles.mobileChevron} />}
                    </Link>
                    {item.children && (
                      <div className={styles.mobileSubmenu}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={styles.mobileSubmenuLink}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.mobileMenuFooter}>
                <Link
                  href="/contact"
                  className={styles.mobileCta}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className={styles.mobileContact}>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

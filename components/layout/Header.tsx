"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight, MapPin, Globe } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import CartButton from "@/components/cart/CartButton";
import styles from "./Header.module.scss";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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

  const handleDropdownEnter = (href: string) => {
    setActiveDropdown(href);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const productNav = navigationConfig.find(item => item.title === "Products");

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <a href={`tel:${siteConfig.phone}`} className={styles.topBarLink}>
              <Phone className="h-3.5 w-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className={styles.divider}>|</span>
            <a href={`mailto:${siteConfig.email}`} className={styles.topBarLink}>
              <Mail className="h-3.5 w-3.5" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.topBarLink}>
              <MapPin className="h-3.5 w-3.5" />
              <span>New Delhi, India</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.topBarLink}>
              <Globe className="h-3.5 w-3.5" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav} ref={dropdownRef}>
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
            {navigationConfig.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className={styles.navItem}
                    onMouseEnter={() => handleDropdownEnter(item.href)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`${styles.navLink} ${pathname.startsWith(item.href) ? styles.active : ""}`}
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.href ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={styles.megaMenu}
                        >
                          <div className={styles.megaMenuContent}>
                            <div className={styles.megaMenuHeader}>
                              <h3>Our Products</h3>
                              <p>Explore our comprehensive range of automotive components</p>
                            </div>
                            <div className={styles.megaMenuGrid}>
                              {item.children.slice(0, 8).map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={styles.megaMenuItem}
                                >
                                  <div className={styles.megaMenuItemIcon}>
                                    <span>{child.title.charAt(0)}</span>
                                  </div>
                                  <div className={styles.megaMenuItemContent}>
                                    <h4>{child.title}</h4>
                                    {child.children && (
                                      <span className={styles.subCount}>
                                        {child.children.length} types available
                                      </span>
                                    )}
                                  </div>
                                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                            <div className={styles.megaMenuFooter}>
                              <Link href="/products" className={styles.viewAllLink}>
                                View All Products
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <CartButton />
            <Link href="/inquiry" className={styles.ctaButton}>
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
                    {item.children ? (
                      <>
                        <button
                          className={styles.mobileNavLink}
                          onClick={() => setActiveMobileSubmenu(
                            activeMobileSubmenu === item.href ? null : item.href
                          )}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              activeMobileSubmenu === item.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeMobileSubmenu === item.href && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={styles.mobileSubmenu}
                            >
                              {item.children.slice(0, 10).map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={styles.mobileSubmenuLink}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.title}
                                </Link>
                              ))}
                              <Link
                                href="/products"
                                className={styles.mobileViewAll}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                View All Products
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.mobileMenuFooter}>
                <Link
                  href="/inquiry"
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

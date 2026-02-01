"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import styles from "./contact-sidebar.module.scss";

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = Array.isArray(siteConfig.phone) 
    ? siteConfig.phone[0] 
    : siteConfig.phone;

  const contactItems = [
    {
      icon: Phone,
      label: "Call Us",
      value: phoneNumber,
      href: `tel:${phoneNumber}`,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      onClick: () => {
        navigator.clipboard.writeText(siteConfig.address);
        alert("Address copied to clipboard!");
      },
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: siteConfig.social.facebook,
      color: "#1877F2",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: siteConfig.social.instagram,
      color: "#E4405F",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      color: "#0A66C2",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Trigger Zone */}
      <div
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Visible Tab */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={styles.tab}
            >
              <span>CONTACT US</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={styles.sidebar}
          >
            {/* Header */}
            <div className={styles.header}>
              <div>
                <h3>Get in Touch</h3>
                <p>We&apos;re here to help you</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contact Items */}
            <div className={styles.contactList}>
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className={styles.contactContent}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

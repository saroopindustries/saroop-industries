import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy | Saroop Industries",
  description: "Privacy Policy for Saroop Industries - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const lastUpdated = "January 26, 2026";

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Saroop Industries ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Submit an inquiry or request a quote</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
              <li>Download our brochure or catalog</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business address</li>
              <li>Product requirements and specifications</li>
            </ul>

            <h3>2.2 Automatic Information</h3>
            <p>When you visit our website, we automatically collect certain information, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Geographic location (country/city)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process your orders and manage business relationships</li>
              <li>Send you product information, catalogs, and updates</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting business, or servicing you</li>
              <li><strong>Business Partners:</strong> Authorized distributors or partners when fulfilling your orders</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
              <li>Provide personalized content</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Object:</strong> Object to certain processing of your information</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className={styles.contactBox}>
              <p><strong>Saroop Industries</strong></p>
              <p>Email: saroopindustries@gmail.com</p>
              <p>Phone: +91-9891169000</p>
              <p>Toll Free: 1800 8913 205</p>
              <p>Address: B-15, Mangolpuri Industrial Area Phase-II, New Delhi- 110034, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

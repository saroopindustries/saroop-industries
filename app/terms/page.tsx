import { Metadata } from "next";
import styles from "../privacy/page.module.scss";

export const metadata: Metadata = {
  title: "Terms of Service | Saroop Industries",
  description: "Terms of Service for Saroop Industries - Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  const lastUpdated = "January 26, 2026";

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Saroop Industries. By accessing or using our website, products, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Saroop Industries ("we," "our," or "us").
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Use of Website</h2>
            <h3>2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old and have the legal capacity to enter into contracts to use our website and services. By using our website, you represent that you meet these requirements.
            </p>

            <h3>2.2 License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for legitimate business purposes in accordance with these Terms.
            </p>

            <h3>2.3 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt our website or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use automated systems (bots, scrapers) to access our website</li>
              <li>Impersonate another person or entity</li>
              <li>Harass, abuse, or harm others</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Products and Services</h2>
            <h3>3.1 Product Information</h3>
            <p>
              We strive to provide accurate product descriptions, specifications, and images. However, we do not warrant that product information is complete, accurate, or error-free. We reserve the right to correct errors and update information at any time without prior notice.
            </p>

            <h3>3.2 Pricing</h3>
            <p>
              All prices are subject to change without notice. Prices quoted are in the specified currency and may not include applicable taxes, duties, or shipping costs. We reserve the right to refuse or cancel orders with pricing errors.
            </p>

            <h3>3.3 Orders and Quotations</h3>
            <p>
              Requests for quotations do not constitute binding offers. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including product unavailability, pricing errors, or suspected fraud.
            </p>

            <h3>3.4 Minimum Order Quantities</h3>
            <p>
              Certain products may have minimum order quantity (MOQ) requirements. MOQs will be communicated during the quotation process.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Intellectual Property</h2>
            <h3>4.1 Ownership</h3>
            <p>
              All content on our website, including text, graphics, logos, images, videos, software, and other materials, is the property of Saroop Industries or its licensors and is protected by intellectual property laws.
            </p>

            <h3>4.2 Trademarks</h3>
            <p>
              Our company name, logo, and product names are trademarks of Saroop Industries. You may not use these trademarks without our prior written consent.
            </p>

            <h3>4.3 Restrictions</h3>
            <p>
              You may not modify, reproduce, distribute, create derivative works, publicly display, or exploit our content without our express written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms will be specified in individual quotations or purchase orders. Standard payment terms include:
            </p>
            <ul>
              <li>Payment methods accepted (wire transfer, letter of credit, etc.)</li>
              <li>Payment schedule and due dates</li>
              <li>Late payment fees and interest charges</li>
              <li>Currency and conversion rates</li>
            </ul>
            <p>
              Failure to make timely payments may result in order cancellation, suspension of services, or legal action to collect outstanding amounts.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Shipping and Delivery</h2>
            <p>
              Shipping terms will be specified in individual quotations. We offer various shipping methods including:
            </p>
            <ul>
              <li>FOB (Free on Board)</li>
              <li>CIF (Cost, Insurance, and Freight)</li>
              <li>DDP (Delivered Duty Paid)</li>
            </ul>
            <p>
              Delivery dates are estimates and not guaranteed. We are not liable for delays caused by customs, shipping carriers, or events beyond our control.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Quality Assurance and Warranties</h2>
            <h3>7.1 Product Quality</h3>
            <p>
              We manufacture products according to industry standards and specifications. All products undergo quality control inspections before shipment.
            </p>

            <h3>7.2 Warranty</h3>
            <p>
              We warrant that our products will be free from defects in materials and workmanship under normal use for the period specified in individual quotations (typically 6-12 months from delivery date).
            </p>

            <h3>7.3 Warranty Claims</h3>
            <p>
              To make a warranty claim, you must:
            </p>
            <ul>
              <li>Notify us within 7 days of discovering a defect</li>
              <li>Provide proof of purchase and defect documentation</li>
              <li>Allow us to inspect the defective products</li>
              <li>Return defective products if requested (at our expense)</li>
            </ul>

            <h3>7.4 Warranty Limitations</h3>
            <p>
              Our warranty does not cover:
            </p>
            <ul>
              <li>Normal wear and tear</li>
              <li>Improper installation or use</li>
              <li>Unauthorized modifications</li>
              <li>Damage from accidents, misuse, or negligence</li>
              <li>Products not stored or handled properly</li>
            </ul>

            <h3>7.5 Disclaimer</h3>
            <p>
              EXCEPT AS EXPRESSLY STATED ABOVE, WE MAKE NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Returns and Refunds</h2>
            <p>
              Returns are accepted under the following conditions:
            </p>
            <ul>
              <li>Products are defective or damaged upon arrival</li>
              <li>Wrong products were shipped</li>
              <li>Products do not meet agreed specifications</li>
            </ul>
            <p>
              Returns must be requested within 7 days of delivery. Custom-made or special-order products are non-returnable unless defective.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAROOP INDUSTRIES SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages exceeding the amount paid for the products</li>
              <li>Damages arising from product use or inability to use products</li>
              <li>Damages caused by third-party products or services</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Saroop Industries from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of our website or products</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Your misuse or modification of our products</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>11. Force Majeure</h2>
            <p>
              We are not liable for delays or failures in performance resulting from events beyond our reasonable control, including:
            </p>
            <ul>
              <li>Natural disasters (earthquakes, floods, fires)</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government actions or regulations</li>
              <li>Strikes or labor disputes</li>
              <li>Epidemics or pandemics</li>
              <li>Supplier failures or material shortages</li>
              <li>Transportation disruptions</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>12. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information disclosed during business transactions, including:
            </p>
            <ul>
              <li>Pricing and cost information</li>
              <li>Technical specifications and drawings</li>
              <li>Business strategies and forecasts</li>
              <li>Customer and supplier information</li>
            </ul>
            <p>
              Confidential information must not be disclosed to third parties without prior written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Governing Law and Dispute Resolution</h2>
            <h3>13.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of India, without regard to conflict of law principles.
            </p>

            <h3>13.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or business transactions shall be resolved through:
            </p>
            <ul>
              <li><strong>Negotiation:</strong> Good faith discussions between parties</li>
              <li><strong>Mediation:</strong> If negotiation fails, binding mediation</li>
              <li><strong>Arbitration:</strong> Final binding arbitration in Ludhiana, Punjab, India</li>
            </ul>

            <h3>13.3 Jurisdiction</h3>
            <p>
              If arbitration is not applicable, you agree to submit to the exclusive jurisdiction of courts in Ludhiana, Punjab, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className={styles.section}>
            <h2>16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any quotations or purchase orders, constitute the entire agreement between you and Saroop Industries regarding use of our website and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>17. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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

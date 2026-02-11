"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/config/clients.config";
import styles from "./ClientsSection.module.scss";

const Marquee = dynamic(() => import("@/components/ui/marquee").then((m) => m.Marquee), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

export default function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Trusted by Leading Brands</h2>
          <p className={styles.subtitle}>
            Serving automotive industry leaders worldwide with premium quality components
          </p>
        </motion.div>

        <div className={styles.marqueeContainer}>
          <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
            {clientLogos.map((client) => (
              <div key={client.id} className={styles.logoWrapper}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  loading="lazy"
                  className={styles.logo}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

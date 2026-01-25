"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { ProductVariant } from "@/config/products.config";
import styles from "./VariantSelector.module.scss";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onVariantChange: (variantId: string) => void;
  variantType?: "size" | "color" | "spec" | "model";
  showSpecs?: boolean;
}

export default function VariantSelector({
  variants,
  selectedVariantId,
  onVariantChange,
  variantType = "spec",
  showSpecs = false,
}: VariantSelectorProps) {
  const selectedVariant = variants.find((v) => v.id === selectedVariantId);

  // Display mode: radio buttons for few variants, dropdown for many
  const displayMode = variants.length <= 6 ? "radio" : "dropdown";

  if (displayMode === "dropdown") {
    return (
      <div className={styles.variantSelector}>
        <label className={styles.label}>
          Select {variantType === "size" ? "Size" : "Variant"}:
        </label>
        <select
          value={selectedVariantId}
          onChange={(e) => onVariantChange(e.target.value)}
          className={styles.dropdown}
        >
          {variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.name || variant.code}
              {variant.specifications.Size &&
                ` - ${variant.specifications.Size}`}
            </option>
          ))}
        </select>

        {showSpecs && selectedVariant && (
          <div className={styles.specs}>
            <h4 className={styles.specsTitle}>
              <Info className="h-4 w-4" />
              Specifications
            </h4>
            <div className={styles.specsGrid}>
              {Object.entries(selectedVariant.specifications).map(
                ([key, value]) => (
                  <div key={key} className={styles.specItem}>
                    <span className={styles.specKey}>{key}:</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.variantSelector}>
      <label className={styles.label}>
        Select {variantType === "size" ? "Size" : "Variant"}:
      </label>

      <div className={styles.radioGroup}>
        {variants.map((variant) => (
          <label
            key={variant.id}
            className={`${styles.radioOption} ${
              selectedVariantId === variant.id ? styles.selected : ""
            }`}
          >
            <input
              type="radio"
              name="variant"
              value={variant.id}
              checked={selectedVariantId === variant.id}
              onChange={() => onVariantChange(variant.id)}
              className={styles.radioInput}
            />
            <div className={styles.radioContent}>
              <div className={styles.radioName}>
                {variant.name || variant.code}
              </div>
              {variant.code && variant.name && (
                <div className={styles.radioCode}>{variant.code}</div>
              )}
              {selectedVariantId === variant.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={styles.checkIcon}
                >
                  <Check className="h-4 w-4" />
                </motion.div>
              )}
            </div>
          </label>
        ))}
      </div>

      {showSpecs && selectedVariant && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.specs}
        >
          <h4 className={styles.specsTitle}>
            <Info className="h-4 w-4" />
            Specifications for {selectedVariant.name || selectedVariant.code}
          </h4>
          <div className={styles.specsGrid}>
            {Object.entries(selectedVariant.specifications).map(
              ([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <span className={styles.specKey}>{key}:</span>
                  <span className={styles.specValue}>{value}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

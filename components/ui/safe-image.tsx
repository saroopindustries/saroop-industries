"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

const createPlaceholderSvg = () =>
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial,sans-serif' font-size='18' fill='%2394a3bf' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function SafeImage({
  src,
  fallbackSrc,
  alt,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasErrored(false);
  }, [src]);

  const handleError = () => {
    if (hasErrored) return;

    setHasErrored(true);
    setImgSrc(fallbackSrc || createPlaceholderSvg());
  };

  const unoptimized = imgSrc.startsWith("data:");

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt ?? "Image"}
      onError={handleError}
      unoptimized={unoptimized}
    />
  );
}

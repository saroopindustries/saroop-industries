import { Skeleton } from "@/components/ui/skeleton";
import styles from "./ProductCardSkeleton.module.scss";

export default function ProductCardSkeleton() {
  return (
    <div className={styles.skeleton}>
      <Skeleton className={styles.image} />
      <div className={styles.content}>
        <Skeleton className={styles.badge} />
        <Skeleton className={styles.title} />
        <Skeleton className={styles.description} />
        <Skeleton className={styles.description} />
        <div className={styles.footer}>
          <Skeleton className={styles.button} />
          <Skeleton className={styles.button} />
        </div>
      </div>
    </div>
  );
}

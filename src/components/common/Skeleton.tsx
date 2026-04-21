import "../../assets/styles/skeleton.css";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton = ({ width = "100%", height = "16px", borderRadius = "8px", className = "" }: SkeletonProps) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
};

/** Skeleton that mimics a product card */
export const ProductCardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-img">
        <Skeleton width="100%" height="220px" borderRadius="0" />
      </div>
      <div className="skeleton-card-content">
        <Skeleton width="85%" height="14px" />
        <Skeleton width="60%" height="12px" />
        <Skeleton width="40%" height="20px" borderRadius="20px" />
        <Skeleton width="50%" height="12px" />
        <Skeleton width="70%" height="16px" />
        <Skeleton width="45%" height="12px" />
      </div>
      <div className="skeleton-card-footer">
        <Skeleton width="24px" height="24px" borderRadius="6px" />
        <Skeleton width="24px" height="24px" borderRadius="6px" />
        <Skeleton width="24px" height="24px" borderRadius="6px" />
      </div>
    </div>
  );
};

/** Skeleton for a product section (heading + row of cards) */
export const ProductSectionSkeleton = () => {
  return (
    <section className="products-section skeleton-section">
      <div className="skeleton-section-header">
        <Skeleton width="220px" height="22px" />
        <Skeleton width="60px" height="14px" />
      </div>
      <div className="skeleton-products-row">
        {[1, 2, 3, 4].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

/** Skeleton for the product detail page */
export const ProductDetailSkeleton = () => {
  return (
    <div className="skeleton-product-detail">
      <div className="skeleton-detail-image">
        <Skeleton width="280px" height="360px" borderRadius="10px" />
      </div>
      <div className="skeleton-detail-content">
        <Skeleton width="70%" height="28px" />
        <Skeleton width="40%" height="14px" />
        <Skeleton width="30%" height="14px" />
        <Skeleton width="50%" height="24px" borderRadius="20px" />
        <Skeleton width="35%" height="14px" />
        <Skeleton width="60%" height="18px" />
        <Skeleton width="45%" height="14px" />
        <Skeleton width="80%" height="12px" />
        <Skeleton width="75%" height="12px" />
      </div>
      <div className="skeleton-detail-actions">
        <Skeleton width="160px" height="44px" borderRadius="10px" />
        <Skeleton width="160px" height="44px" borderRadius="10px" />
        <Skeleton width="120px" height="16px" />
        <Skeleton width="80px" height="16px" />
      </div>
    </div>
  );
};

export default Skeleton;

import Skeleton from "react-loading-skeleton";

const CardLoadingSkeleton = () => {
  const skeletonBaseColor: string = "#595959";
  const skeletonHighlightColor: string = "#4c4c4c";

  const renderedItems: number[] = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="loading-content">
      <div className="loading-image">
        <Skeleton
          baseColor={skeletonBaseColor}
          highlightColor={skeletonHighlightColor}
        />
      </div>
      <div className="loading-tagline">
        {renderedItems.map((_, index: number) => (
          <Skeleton
            key={index}
            baseColor={skeletonBaseColor}
            highlightColor={skeletonHighlightColor}
          />
        ))}
      </div>
    </section>
  );
};

export default CardLoadingSkeleton;

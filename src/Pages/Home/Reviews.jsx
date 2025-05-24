import React, { useEffect, useRef, useState } from "react";
import data from "../../data/index.json";

export default function ReviewsCarousel() {
  const reviews = data?.reviews || [];
  const extendedReviews = [...reviews, ...reviews];
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollSpeed = 0.9;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reviews.length === 0) return;

    let animationFrameId;

    function step() {
      if (isScrolling) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isScrolling, reviews.length]);

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <section className="review-section" id="review">
      <div className="review-header">
        <p className="sub-title">Clients Feedback</p>
        <h2 className="sections-heading">Happy Clients!</h2>
      </div>

      <div
        className="reviews-wrapper"
        ref={containerRef}
        onClick={() => setIsScrolling((prev) => !prev)}
        style={{
          cursor: "pointer",
          overflowX: "auto",
          whiteSpace: "nowrap",
          display: "flex",
          gap: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {extendedReviews.map((item, index) => {
          return (
            <div
              key={index}
              className="review-card"
              style={{
                flex: "0 0 420px", // largura fixa e não cresce
                boxSizing: "border-box",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#333",
              }}
            >
              <div className="review-rating" style={{ marginBottom: "0.5rem" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    style={{ color: "#f5a623" }}
                  >
                    <path
                      d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>

              <p
                className="review-description"
                style={{
                  whiteSpace: "normal",
                  lineHeight: "1.4em",
                  marginBottom: "0.8rem",
                  flexGrow: 1, // para ocupar espaço vertical e ajudar no alinhamento
                }}
              >
                {item.description}
              </p>

              <div className="review-bottom">
                <p
                  className="author-name"
                  style={{ fontWeight: "700", marginBottom: "0.2rem" }}
                >
                  {item.author_name}
                </p>
                <p className="author-designation" style={{ color: "#666", fontSize: "0.9rem" }}>
                  {item.author_designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

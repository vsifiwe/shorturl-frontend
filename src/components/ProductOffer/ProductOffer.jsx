import React from "react";

export default function ProductOffer() {
  return (
    <div className="product-section">
      <h1>Our products</h1>
      <div className="products">
        <div className="product-card">
          <h3>Link Management</h3>
          <p>
            People click links they trust. With URL Shortener, you can create
            and share branded links that look like your brand instilling trust
            in your audience and boosting your click-throughs.
          </p>
        </div>
        <div className="product-card">
          <h3>Link Redirection</h3>
          <p>
            Change the destination URL for any short link, including QR Codes.
            Url Shortener makes it easy to assign a new URL to any of your
            links, whether you want to correct a destination error, update a
            destination or manually expire old links.
          </p>
        </div>
        <div className="product-card">
          <h3>Deep Insights</h3>
          <p>
            Leverage key real-time data points on every click—like geographic
            data and information on referring channels—to make smarter,
            data-driven decisions on where and how to invest your brand’s
            resources.
          </p>
        </div>
      </div>
    </div>
  );
}

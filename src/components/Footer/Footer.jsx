import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h2>About</h2>
          <p>
            Creating, sharing and monitoring your links shouldn’t be a drag. URL
            shortener helps you work faster and more intelligently—with features
            like branded links and the ability to redirect any link—so you can
            relish the sweet taste of hitting your performance goals.
          </p>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <p>
            We provide employment pathways in the tech sector to young graduates
            in Sub-Saharan Africa, connecting them to the global demand for tech
            talent. Our approach combines training with employment and
            continuous learning because evidence show that only this integrated
            approach actually works. By focusing on skilled ICT services, we
            contribute to ecosystem development and to the emergence of the
            future-proof industry with growth engine potential.
          </p>
        </div>
        <div className="footer-section">
          <h2>Solutions</h2>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="https://amalitech.com/wp-content/uploads/2020/04/amali-services-white-01-294x84.png"
          alt="Amalitech services logo"
        />
        <ul>
          <li>Web</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import Button from "./Button";

function TrendingSection() {
  return (
    <>
      <div className="trending">
        <h2 className="trending__title">People also buy</h2>
        <div className="trending__items">
          <img
            src="/images/Rectangle 10.png"
            alt=""
            className="trending__item-img"
          />
          <img
            src="/images/Rectangle 10.1.png"
            alt=""
            className="trending__item-img"
          />
          <img
            src="/images/Rectangle 10.2.png"
            alt=""
            className="trending__items-img"
          />
        </div>
        <div className="trending__items-meta-data">
          <h3 className="trending__items-sub-title">Details</h3>
          <p className="trending__items-pixel">Size: 1020 x 1020 pixel</p>
          <p className="trending__items-size">Size: 15 mb</p>
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero__header">
          <h1 className="hero__title">Samurai King Resting</h1>
          <Button content="ADD TO CART" name="btn btn--dark hero__header-btn" />
        </div>
        <picture>
          <source
            media="(max-width: 475px)"
            srcset="/images/samurai-king.png"
          />
          <source
            media="(min-width: 475px)"
            srcset="/images/bg-samurai-king.png"
          />
          <img className="hero__img" src="/public/images/samurai-king.png" />
        </picture>
        <Button content="ADD TO CART" name="btn hero__btn btn--dark" />
        <div className="hero__content">
          <div className="hero__about">
            <h2 className="hero__about-title">
              About the Samurai King Resting
            </h2>
            <h3 className="hero__about-sub-title">Pets</h3>
            <p className="hero__about-description">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
            <p className="hero__about-description">
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </p>
          </div>
          <TrendingSection />
        </div>
      </section>
    </>
  );
}

import React from "react";

export default function Header({ toggleCartOpen }) {
  return (
    <>
      <header className="header">
        <div className="header__logo-wrapper">
          <img src="/images/logo.png" alt="Logo" className="header__logo" />
        </div>
        <button
          type="button"
          className="header__cart-btn btn"
          onClick={toggleCartOpen}
        >
          <img src="/images/cart.png" alt="Cart" className="header__cart-img" />
          <p className="header__cart-quantity">1</p>
        </button>
      </header>
    </>
  );
}

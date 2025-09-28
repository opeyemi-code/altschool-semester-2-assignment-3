import React from "react";
import Button from "./Button";

export default function Cart({ closeCart }) {
  return (
    <>
      <div className="cart">
        <div className="cart__btn-wrapper">
          <button className="btn cart__close-btn" onClick={closeCart}>
            X
          </button>
        </div>
        <div className="cart__item">
          <div className="cart__item-info">
            <h2 className="cart__item-title">Samurai King Resting</h2>
            <p className="cart__item-price">$10000.00</p>
          </div>
          <img
            src="/images/pexels-evgeny-tchebotarev-2187304 (1) 2.png"
            alt="Samurai King"
            className="cart__item-img"
          />
        </div>
        <Button content="CLEAR" name="btn cart__clear-btn" />
      </div>
    </>
  );
}

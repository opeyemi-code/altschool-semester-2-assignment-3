import React, { useState } from "react";
import Button from "./Button";

export default function ProductsItem({
  visible,
  itemName,
  label,
  image,
  category,
  name,
  price,
}) {
  const [labelVisible] = useState(visible);
  return (
    <>
      <li className={itemName}>
        {labelVisible && <p class="products__best-seller-label">{label}</p>}
        <div className="products__item-img-wrapper">
          <img src={image} alt={name} className="products__item-img" />
          <Button
            content="ADD TO CART"
            name="btn btn--dark products__item-btn"
          />
        </div>
        <h2 className="products__item-category">{category}</h2>
        <h3 className="products__item-name">{name}</h3>
        <p className="products__item-price">{price}</p>
      </li>
    </>
  );
}

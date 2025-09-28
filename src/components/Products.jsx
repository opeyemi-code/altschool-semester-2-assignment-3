import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";
import Pagination from "./Pagination";
import CheckBox from "./CheckBox";
import FilterDialog from "./FilterDialog";

function ProductsFilter() {
  return (
    <>
      <aside className="products__sidebar">
        <form className="products__filter-form">
          <fieldset className="products__fieldset products__filter-category">
            <legend className="products__legend products__category-title">
              Category
            </legend>
            <CheckBox label="People" />
            <CheckBox label="Premium" />
            <CheckBox label="Pets" />
            <CheckBox label="Food" />
            <CheckBox label="Landmarks" />
            <CheckBox label="Cities" />
            <CheckBox label="Nature" />
          </fieldset>
          <fieldset className="products__fieldset products__filter-price">
            <legend className="products__legend products__price-range-title">
              Price Range
            </legend>
            <CheckBox label="Lower than $20" />
            <CheckBox label="$20 - $100" />
            <CheckBox label="$100 - $200" />
            <CheckBox label="More than $200" />
          </fieldset>
        </form>
      </aside>
    </>
  );
}

function ProductsContent() {
  return (
    <>
      <div className="products__content">
        <ul className="products__list">
          <ProductsItem
            visible={true}
            itemName="products__item"
            label="Best Seller"
            image="/images/Rectangle 2.png"
            category="People"
            name="Red Bench"
            price="$3.89"
          />
          <ProductsItem
            itemName="products__item"
            image="/images/Rectangle 2.1.png"
            category="Food"
            name="Egg Ball"
            price="$93.89"
          />
          <ProductsItem
            itemName="products__item products__item-duplicate"
            image="/images/Rectangle 2.1.png"
            category="Food"
            name="Egg Ball"
            price="$93.89"
          />
          <ProductsItem
            itemName="products__item"
            image="/images/Rectangle 2.4.png"
            category="People"
            name="Man"
            price="$100.00"
          />
          <ProductsItem
            itemName="products__item"
            image="/images/Rectangle 2.5.png"
            category="Landmarks"
            name="Archicteture"
            price="$101.00"
          />
          <ProductsItem
            itemName="products__item products__item-duplicate"
            image="/images/Rectangle 2.5.png"
            category="Landmarks"
            name="Archicteture"
            price="$101.00"
          />
        </ul>
        <Pagination />
      </div>
    </>
  );
}

export default function Products() {
  const [isToggleDialog, setIsToggleDialog] = useState(true);

  useEffect(() => {
    const filterBtn = document.querySelector(".products__filter-btn");
    const filterDialog = document.querySelector(".filter__dialog");

    filterBtn.addEventListener("click", toggleDialog);

    function toggleDialog(e) {
      e.preventDefault();
      if (window.screen.width <= 475) {
        setIsToggleDialog(false);
        filterDialog.showModal();
      } else {
        filterDialog.close();
      }
    }

    // console.log(filterBtn, filterDialog);
  }, [isToggleDialog]);
  return (
    <>
      <div className="products">
        <div className="products__header">
          <h2 className="products__title">
            Photograpy/
            <span className="products__type"> Premium Photos</span>
          </h2>
          <p className="products__sort">
            <img
              src="/images/sort-icon.png"
              alt="sort"
              className="products__sort-img"
            />
            Sorts By
            <button className="btn products__sort-price-btn">
              Price
              <img
                src="/images/dropdown-icon.png"
                alt=""
                className="products__sort-dropdown"
              />
            </button>
          </p>
          <button className="btn products__filter-btn">
            <img
              src="/images/filter.png"
              alt="filter"
              className="products__filter-img"
            />
          </button>
        </div>
        <div className="products__grid">
          <ProductsFilter />
          <ProductsContent />
        </div>
        {/* Products filter dialog for mobile screens */}
        <FilterDialog />
      </div>
    </>
  );
}

import React from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";

export default function FilterDialog() {
  return (
    <>
      <dialog className="filter__dialog">
        <div className="filter__dialog-header">
          <h2 className="filter__title">Filter</h2>
          <div className="filter__btn-wrapper">
            <button className="btn filter__btn" type="button">
              X
            </button>
          </div>
        </div>
        <form action="" className="products__filter-form">
          <div className="filter__form-checkbox">
            <fieldset className="products__fieldset products__filter-category">
              <legend className="products__legend products__category-title">
                Category
              </legend>
              <CheckBox id="People-dialog" label="People" />
              <CheckBox id="Premium-dialog" label="Premium" />
              <CheckBox id="Pets-dialog" label="Pets" />
              <CheckBox id="Food-dialog" label="Food" />
              <CheckBox id="Landmarks-dialog" label="Landmarks" />
              <CheckBox id="Cities-dialog" label="cities" />
              <CheckBox id="Nature-dialog" label="Nature" />
            </fieldset>
            <fieldset className="products__fieldset products__filter-price">
              <legend className="products__legend products__price-range-title">
                Price Range
              </legend>
              <CheckBox id="Lower than $20-dialog" label="Lower than $20" />
              <CheckBox id="$20 - $100-dialog" label="$20" />
              <CheckBox id="$100 - $200-dialog" label="$100 - $200" />
              <CheckBox id="More than $200-dialog" label="More than $200" />
            </fieldset>
          </div>
          <div className="form__btns">
            <Button
              content="Clear"
              name="btn filter__form-btn filter__clear-btn"
            />
            <Button
              content="Save"
              name="btn btn--dark filter__form-btn filter__save-btn"
            />
          </div>
        </form>
      </dialog>
    </>
  );
}

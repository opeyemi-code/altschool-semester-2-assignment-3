import React from "react";
import Button from "./Button";

export default function Pagination() {
  return (
    <>
      <nav className="pagination">
        <button className="btn pagination__btn" type="button">
          <img
            className="pagination__arrow-img"
            src="/images/Vector 1.png"
            alt=""
          />
        </button>
        <Button content="1" name="btn pagination__btn" />
        <Button content="2" name="btn pagination__btn" />
        <Button
          content="3"
          name="btn pagination__btn pagination__btn--active"
        />
        <Button content="4" name="btn pagination__btn" />
        <button className="btn pagination__btn" type="button">
          <img
            className="pagination__arrow-img"
            src="/images/Vector 2.png"
            alt=""
          />
        </button>
      </nav>
    </>
  );
}

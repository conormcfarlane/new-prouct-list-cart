import React from "react";
import addToCartIcon from "/images/icon-add-to-cart.svg";
type Props = {};

const AddToCartButton = (props: Props) => {
  return (
    <div className="flex gap-2 bg-white py-2 px-8 rounded-full border border-(--color-Rose400) ">
      <img src={addToCartIcon} alt="" />
      <p>Add to cart</p>
    </div>
  );
};

export default AddToCartButton;

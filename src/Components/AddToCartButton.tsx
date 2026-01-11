import React from "react";
import addToCartIcon from "/images/icon-add-to-cart.svg";
import iconIncrement from "/images/icon-increment-quantity.svg";
import iconDecrement from "/images/icon-decrement-quantity.svg";
const AddToCartButton = () => {
  let itemQuantity = 0;
  return (
    <div
      className={`rounded-full border py-3 h-11 w-40 ${
        itemQuantity >= 1
          ? "bg-(--color-Red) border border-(--color-Red)"
          : "bg-white border-(--color-Rose400)"
      } `}
    >
      {itemQuantity >= 1 ? (
        <div className="flex justify-between px-3">
          <img
            src={iconDecrement}
            alt=""
            className="inc-dec-borders cursor-pointer"
          />
          <p className="text-preset4Bold text-white">{itemQuantity}</p>
          <img
            src={iconIncrement}
            alt=""
            className="inc-dec-borders cursor-pointer "
          />
        </div>
      ) : (
        <div className="flex gap-2 px-6 cursor-pointer">
          <img src={addToCartIcon} alt="" />
          <p className="text-preset4Bold">Add to Cart</p>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;

import addToCartIcon from "/images/icon-add-to-cart.svg";
import iconIncrement from "/images/icon-increment-quantity.svg";
import iconDecrement from "/images/icon-decrement-quantity.svg";
import { useShoppingCart } from "../context/CartContext";

type AddToCartButtonProps = {
  id: number;
};

const AddToCartButton = ({ id }: AddToCartButtonProps) => {
  const { incrementQuantity, decrementQuantity, getItemQuantity } =
    useShoppingCart();
  const itemQuantity = getItemQuantity(id);
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
            onClick={() => decrementQuantity(id)}
          />
          <p className="text-preset4Bold text-white">{itemQuantity}</p>
          <img
            src={iconIncrement}
            alt=""
            className="inc-dec-borders cursor-pointer "
            onClick={() => incrementQuantity(id)}
          />
        </div>
      ) : (
        <div
          className="flex gap-2 px-6 cursor-pointer"
          onClick={() => incrementQuantity(id)}
        >
          <img src={addToCartIcon} alt="" />
          <p className="text-preset4Bold">Add to Cart</p>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;

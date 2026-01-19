import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/data.json";
import removeIcon from "/images/icon-remove-item.svg";
import iconTree from "/images/icon-carbon-neutral.svg";
type Props = {};

export default function Cart({}: Props) {
  const { cartItems, removeFromCart } = useShoppingCart();

  // Calculate Total Cart Quantity
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  // Calculate Total Cart Price
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => cartItem.id === i.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  console.log(cartItems);

  return (
    <section className="flex flex-col gap-6 bg-white p-6 rounded-xl h-fit">
      <h2 className="text-(--color-Red)">Your Cart ({cartQuantity})</h2>
      <div>
        {cartItems.map((cartItem) => {
          const item = storeItems.find((i) => i.id === cartItem.id);
          if (!item) return null;
          return (
            <div
              key={cartItem.id}
              className="flex justify-between border-b border-(--color-Rose300) py-4"
            >
              <div>
                <p className="text-preset4Bold">{item.name}</p>
                <div className="flex gap-4 text-preset4">
                  <p className="text-(--color-Red)">{cartItem.quantity} x</p>
                  <p>@ {item.price.toFixed(2)}</p>
                  <p>$ {(item.price * cartItem.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div
                className="self-center"
                onClick={() => removeFromCart(cartItem.id)}
              >
                <img
                  src={removeIcon}
                  alt=""
                  className="w-5 h-5  px-1 border-2 rounded-full border-(--color-Rose500) cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <p>Order Total</p>
        <p className="text-preset2">$ {totalPrice.toFixed(2)}</p>
      </div>
      <div className=" flex justify-center gap-2 bg-(--color-Rose300) px-6 py-4 rounded-xl">
        <img src={iconTree} alt="" />
        <p className="text-preset4">
          This is a <span className="text-preset4Bold">carbon neutral</span>{" "}
          delivery
        </p>
      </div>
      <button className="bg-(--color-Red) py-4 rounded-full text-white text-preset3 cursor-pointer">
        Confirm Order
      </button>
    </section>
  );
}

import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/data.json";
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
    <section>
      <h2>Your cart {cartItems.length}</h2>
    </section>
  );
}

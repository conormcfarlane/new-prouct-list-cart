import DessertList from "./Components/DessertList";
import Cart from "./Components/Cart";
import { ShoppingCartProvider } from "./context/CartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <div className="p-6 md:p-10">
        <DessertList />
        <Cart />
      </div>
    </ShoppingCartProvider>
  );
}

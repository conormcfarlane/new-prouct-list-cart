import DessertList from "./Components/DessertList";
import Cart from "./Components/Cart";
import { ShoppingCartProvider } from "./context/CartContext";

export default function App() {
  return (
    <ShoppingCartProvider>

      <div className="p-6 md:p-10 grid gap-8 lg:grid-cols-[7fr_3fr] lg:max-w-304 mx-auto">
        <DessertList />
        <Cart />
      </div>
    </ShoppingCartProvider>
  );
}

import DessertList from "./Components/DessertList";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <div className="p-6 md:p-10">
      <DessertList />
      <Cart />
    </div>
  );
}

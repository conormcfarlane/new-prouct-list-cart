import DessertCard from "./DessertCard";
import storeItems from "../data/data.json";

console.log(storeItems);
export default function DessertList() {
  return (
    <>
      <h1>Desserts</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storeItems.map((item) => (
          <div key={item.name}>
            <DessertCard {...item} />
          </div>
        ))}
      </section>
    </>
  );
}

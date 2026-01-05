import DessertCard from "./DessertCard";
import storeItems from "../data/data.json";

console.log(storeItems);
export default function DessertList() {
  return (
    <>
      <h1>Desserts</h1>
      <section>
        {storeItems.map((item) => (
          <div key={item.name}>
            <DessertCard {...item} />
          </div>
        ))}
      </section>
    </>
  );
}

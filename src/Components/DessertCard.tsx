import { getImageUrl } from "../utils/imageHelper";
import AddToCartButton from "./AddToCartButton";
type DessertCardProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
};

export default function DessertCard({
  id,
  name,
  category,
  price,
  image,
}: DessertCardProps) {
  const mobileImage = `/images/${getImageUrl(image.mobile)}`;
  const tabletImage = `/images/${getImageUrl(image.tablet)}`;
  const desktopImage = `/images/${getImageUrl(image.desktop)}`;

  let itemQuantity = 0;
  return (
    <section className="flex flex-col gap-9">
      <div className="relative">
        <picture
          className={` border-2  block rounded-lg overflow-hidden z-1 ${
            itemQuantity >= 1 ? "border-(--color-Red)" : "border-transparent"
          } `}
        >
          <source media="(min-width:768px)" srcSet={desktopImage} />
          <source media="(max-width:767px)" srcSet={tabletImage} />
          <img src={mobileImage} />
        </picture>
        <div className="absolute h-fit w-full flex justify-center bottom-0 translate-y-1/2 z-10">
          <AddToCartButton id={id} />
        </div>
      </div>

      <div>
        <p className="text-preset4">{category}</p>
        <p className="text-preset3">{name}</p>
        <p className="text-preset3 text-(--color-Red)">${price.toFixed(2)}</p>
      </div>
    </section>
  );
}

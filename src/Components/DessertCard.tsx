import React from "react";
import { getImageUrl } from "../utils/imageHelper";

type DessertCardProps = {
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
  name,
  category,
  price,
  image,
}: DessertCardProps) {
  const mobileImage = `/images/${getImageUrl(image.mobile)}`;
  const tabletImage = `/images/${getImageUrl(image.tablet)}`;
  const desktopImage = `/images/${getImageUrl(image.desktop)}`;
  return (
    <>
      <picture>
        <source media="(min-width:768px)" srcSet={desktopImage} />
        <source media="(max-width:767px)" srcSet={tabletImage} />
        <img src={mobileImage} />
      </picture>
      <div>
        <p>{category}</p>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </>
  );
}

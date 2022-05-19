import React from "react";
import { CART } from "../../graphql/cart";

const ItemData = ({
  imageUrl,
  title,
  price,
}: Pick<CART, "imageUrl" | "title" | "price">) => {
  return (
    <div>
      <p>상품명 : {title}</p>
      <img src={imageUrl} />
      <p>가격 : {price}</p>
    </div>
  );
};

export default ItemData;

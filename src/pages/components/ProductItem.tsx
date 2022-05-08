import React from "react";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";

const ProductItem = ({
  category,
  title,
  rating,
  price,
  image,
  description,
}: IProductItem) => {
  return (
    <ProductItems>
      <p> {category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </ProductItems>
  );
};

export default ProductItem;

const ProductItems = styled.li`
  border: 1px solid #000;
  padding: 10px;
  img {
    width: 100%;
  }
`;

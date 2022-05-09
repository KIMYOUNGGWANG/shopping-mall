import React from "react";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    price,
    description,
    rating: { rate },
  },
}: {
  item: IProductItem;
}) => {
  return (
    <ProductDetailContainer>
      <p> {category}</p>
      <p>{title}</p>
      <img src={image} />
      <p>{description}</p>
      <span>${price}</span>
      <span>{rate}</span>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

const ProductDetailContainer = styled.li`
  border: 1px solid #000;
  padding: 10px;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

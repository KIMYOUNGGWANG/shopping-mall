import React from "react";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";
import { PRODUCT } from "../../graphql/products";

const ProductDetail = ({
  item: { title, imageUrl, price, description },
}: {
  item: PRODUCT;
}) => {
  return (
    <ProductDetailContainer>
      <p>{title}</p>
      <img src={imageUrl} />
      <p>{description}</p>
      <span>${price}</span>
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

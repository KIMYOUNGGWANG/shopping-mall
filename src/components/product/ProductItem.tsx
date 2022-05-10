import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";
import { PRODUCT } from "../../graphql/products";

const ProductItem = ({
  title,
  price,
  imageUrl,
  description,
  createdAt,
  id,
}: PRODUCT) => {
  return (
    <ProductItems>
      <Link to={`/products/${id}`}>
        <p> {title}</p>
        <img src={imageUrl} />
        <span>${price}</span>
        <span>{createdAt}</span>
      </Link>
    </ProductItems>
  );
};

export default ProductItem;

const ProductItems = styled.li`
  border: 1px solid #000;
  padding: 10px;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

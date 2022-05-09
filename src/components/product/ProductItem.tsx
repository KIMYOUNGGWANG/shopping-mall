import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";

const ProductItem = ({
  category,
  title,
  rating,
  price,
  image,
  description,
  id,
}: IProductItem) => {
  return (
    <ProductItems>
      <Link to={`/products/${id}`}>
        <p> {category}</p>
        <p>{title}</p>
        <img src={image} />
        <span>${price}</span>
        <span>{rating.rate}</span>
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

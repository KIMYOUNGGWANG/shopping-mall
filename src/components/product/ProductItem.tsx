import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";
import { PRODUCT } from "../../graphql/products";
import { useCartItem } from "../recoils/cart";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";

const ProductItem = ({
  title,
  price,
  imageUrl,
  description,
  createdAt,
  id,
}: PRODUCT) => {
  const { mutate: addCart, data } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );
  console.log();
  const [cartAmount, setCartAmount] = useRecoilState(useCartItem(id));
  const addToCart = () => {
    setCartAmount((prev) => (prev || 0) + 1);
  };
  return (
    <ProductItems>
      <Link to={`/products/${id}`}>
        <p> {title}</p>
        <img src={imageUrl} />
        <span>${price}</span>
        <span>{createdAt}</span>
      </Link>
      <button onClick={() => addCart(id)}>담기</button>
      <span>{0}</span>
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

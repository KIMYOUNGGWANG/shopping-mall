import React from "react";
import styled from "styled-components";
import { CART } from "../../graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ items }: { items: CART[] }) => {
  return (
    <>
      <label>
        <input type="checkbox" />
        전체 선택
      </label>
      <CartListWrapper>
        {items.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </CartListWrapper>
    </>
  );
};

export default CartList;

const CartListWrapper = styled.ul`
  list-style: none;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

import React from "react";
import styled from "styled-components";
import { CART } from "../../graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ items }: { items: CART[] }) => {
  console.log(items);
  return (
    <CartListWrapper>
      {items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </CartListWrapper>
  );
};

export default CartList;

const CartListWrapper = styled.ul`
  list-style: none;
  padding: 0 40px;
  max-width: 768px;
  display: flex;
  flex-direction: column;
`;

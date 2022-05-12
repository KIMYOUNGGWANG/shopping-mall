import React, { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { CART, UPDATE_CART } from "../../graphql/cart";
import { graphqlFetcher } from "../../queryClient";

const CartItem = ({ id, title, price, amount, imageUrl }: CART) => {
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount })
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };
  return (
    <CartListItemWrapper>
      <p>상품명 : {title}</p>
      <img src={imageUrl} />
      <p>가격 : {price}</p>
      <input type="number" value={amount} onChange={handleUpdateAmount} />
    </CartListItemWrapper>
  );
};

export default CartItem;

const CartListItemWrapper = styled.li`
  border: 1px solid #999999;
`;

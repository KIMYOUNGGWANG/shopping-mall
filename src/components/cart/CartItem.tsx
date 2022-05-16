import React, { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { CART, DELETE_CART, UPDATE_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({ id, title, price, amount, imageUrl }: CART) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART);
        const prevCart = queryClient.getQueryData<{ [key: string]: CART }>(
          QueryKeys.CART
        );
        if (!prevCart?.[id]) return prevCart;
        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[id], amount },
        };
        queryClient.setQueryData(QueryKeys.CART, newCart);
        return prevCart;
      },
      onSuccess: (data) => {
        const prevCart = queryClient.getQueryData<{ [key: string]: CART }>(
          QueryKeys.CART
        );
        const newCart = { ...(prevCart || {}), [id]: data };
        queryClient.setQueryData(QueryKeys.CART, newCart); // cart전체에 대한 데이터
      },
    }
  );

  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART);
      },
    }
  );
  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({ id });
  };
  return (
    <CartListItemWrapper>
      <label>
        <input type="checkbox" />
        선택
      </label>
      <p>상품명 : {title}</p>
      <img src={imageUrl} />
      <p>가격 : {price}</p>
      <input type="number" value={amount} onChange={handleUpdateAmount} />
      <button type="button" onClick={handleDeleteItem}>
        삭제
      </button>
    </CartListItemWrapper>
  );
};
export default CartItem;

const CartListItemWrapper = styled.li`
  border: 1px solid #999999;
  padding: 10px;
`;

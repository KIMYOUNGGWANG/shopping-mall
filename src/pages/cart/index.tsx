import React from "react";
import { useQuery } from "react-query";
import CartList from "../../components/cart/CartList";
import { CART, GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,
  });
  const cartItem = Object.values(data || {}) as CART[];
  if (!cartItem.length) return <div>장바구니가 비었어요.</div>;
  console.log(cartItem);
  return <CartList items={cartItem} />;
};

export default Cart;

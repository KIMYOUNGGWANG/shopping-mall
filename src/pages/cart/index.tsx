import React from "react";
import { useQuery } from "react-query";
import { GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART));
  console.log(data);
  return <div>장바구니</div>;
};

export default Cart;

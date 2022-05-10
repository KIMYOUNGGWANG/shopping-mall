import React from "react";
import { useQuery } from "react-query";
import { IProductItem } from "../../@types/ProductItem";
import { fetcher, graphqlFetcher, QueryKeys } from "../../queryClient";
import styled from "styled-components";
import ProductItem from "../../components/product/ProductItem";
import { GET_PRODUCTS, PRODUCT } from "../../graphql/products";
const ProductList = () => {
  const { data } = useQuery<PRODUCT[]>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher(GET_PRODUCTS)
  );
  return (
    <div>
      <h2>상품목록</h2>
      <Products>
        {data?.products?.map((product: PRODUCT) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </Products>
    </div>
  );
};

export default ProductList;

const Products = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

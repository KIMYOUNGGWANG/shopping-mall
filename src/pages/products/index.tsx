import React from "react";
import { useQuery } from "react-query";
import { IProductItem } from "../../@types/ProductItem";
import { fetcher, QueryKeys } from "../../queryClient";
import styled from "styled-components";
import ProductItem from "../../components/product/ProductItem";
const ProductList = () => {
  const { data } = useQuery<IProductItem[]>([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <h2>상품목록</h2>
      <Products>
        {data?.map((product) => (
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

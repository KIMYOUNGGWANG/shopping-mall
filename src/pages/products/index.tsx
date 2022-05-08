import React from "react";
import { useQuery } from "react-query";
import { IProductItem } from "../../@types/ProductItem";
import { fetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../components/ProductItem";
import styled from "styled-components";
const ProductList = () => {
  const { data } = useQuery<IProductItem[]>([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <Products>
        {data?.map(product => (
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

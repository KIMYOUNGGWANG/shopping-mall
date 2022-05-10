import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";
import { fetcher, graphqlFetcher, QueryKeys } from "../../queryClient";
import ProductDetail from "../../components/product/ProductDetail";
import { GET_PRODUCT, PRODUCT } from "../../graphql/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<PRODUCT>([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  );
  if (!data) return null;

  return <ProductDetail item={data} />;
};

export default ProductDetailPage;

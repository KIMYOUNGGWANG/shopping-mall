import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IProductItem } from "../../@types/ProductItem";
import { fetcher, QueryKeys } from "../../queryClient";
import ProductDetail from "../../components/product/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<IProductItem>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  if (!data) return null;

  return <ProductDetail item={data} />;
};

export default ProductDetailPage;

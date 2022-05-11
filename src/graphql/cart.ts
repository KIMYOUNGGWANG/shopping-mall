import { gql } from "graphql-tag";

export interface CART {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  createdAt: string;
  amount: number;
}

export const GET_CART = gql`
  query GET_CART {
    id
    imageUrl
    price
    title
    amount
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    id
    imageUrl
    price
    title
    amount
  }
`;

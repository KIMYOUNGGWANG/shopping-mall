import request, { RequestDocument } from "graphql-request";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

type anyOBJ = { [key: string]: any };
interface Ifetcher {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: anyOBJ;
  params?: anyOBJ;
}

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
  CART: "CART",
};

const SERVER_URL = "/";
// const SERVER_URL = "https://fakestoreapi.com";

export const fetcher = async ({ method, path, body, params }: Ifetcher) => {
  try {
    let url = `${SERVER_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": SERVER_URL,
      },
    };

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }

    if (body) fetchOptions.body = JSON.stringify(body);
    const res = await fetch(url, body);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
  request(SERVER_URL, query, variables);

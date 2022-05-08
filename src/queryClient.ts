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
    if (!client) client = new QueryClient();
    return client;
  };
})();

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};

const SERVER_URL = "https://fakestoreapi.com";

export const fetcher = async ({ method, path, body }: Ifetcher) => {
  try {
    const url = `${SERVER_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": SERVER_URL,
      },
    };
    const res = await fetch(url, body);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

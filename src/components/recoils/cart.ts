import { atom, selector, selectorFamily, useRecoilValue } from "recoil";
import { CART } from "../../graphql/cart";

export const cartState = atom<Map<string, number>>({
  key: "cartState",
  default: new Map(),
});

export const useCartItem = selectorFamily<number | undefined, string>({
  key: "cartItem",
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      if (typeof newValue === "number") {
        const newCart = new Map([...get(cartState)]).set(id, newValue);
        set(cartState, newCart);
      }
    },
});

export const checkedCartState = atom<CART[]>({
  key: "checkedCart",
  default: [],
});

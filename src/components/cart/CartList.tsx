import React, {
  createRef,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CART } from "../../graphql/cart";
import { checkedCartState } from "../recoils/cart";
import CartItem from "./CartItem";
import WillPay from "./willPay";

const CartList = ({ items }: { items: CART[] }) => {
  const [checkedData, setCheckedCartData] = useRecoilState(checkedCartState);
  const [formData, setFormData] = useState<FormData>();
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = items.map(() => createRef<HTMLInputElement>());
  const handleCheckboxChanged = (e: SyntheticEvent) => {
    if (!formRef.current) return;

    const targetInput = e.target as HTMLInputElement;
    const data = new FormData(formRef.current);
    const selectCount = data.getAll("select-item").length;

    if (targetInput && targetInput.classList.contains("select-all")) {
      const allChecked = targetInput.checked;
      checkboxRefs.forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      });
    } else {
      const allChecked = selectCount === items.length;
      formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
        allChecked;
    }
    setFormData(data);
  };

  useEffect(() => {
    checkedData.forEach((item) => {
      const itemRef = checkboxRefs.find(
        (ref) => ref.current!.dataset.id === item.id
      );
      console.log(checkboxRefs.find((ref) => ref.current!.dataset.id));
      if (itemRef) itemRef.current!.checked = true;
    });
  }, []);
  useEffect(() => {
    const checkedItem = checkboxRefs.reduce<CART[]>((acc, ref, i) => {
      if (ref.current!.checked) acc.push(items[i]);
      return acc;
    }, []);
    setCheckedCartData(checkedItem);
  }, [items, formData]);
  return (
    <>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <input
            type="checkbox"
            className="
          select-all"
            name="select-all"
          />
          전체 선택
        </label>
        <CartListWrapper>
          {items.map((item, i) => (
            <CartItem {...item} key={item.id} ref={checkboxRefs[i]} />
          ))}
        </CartListWrapper>
      </form>
      <WillPay />
    </>
  );
};

export default CartList;

const CartListWrapper = styled.ul`
  list-style: none;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

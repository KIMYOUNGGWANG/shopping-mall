import React, { createRef, SyntheticEvent, useRef } from "react";
import styled from "styled-components";
import { CART } from "../../graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ items }: { items: CART[] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = items.map(() => createRef<HTMLInputElement>());
  const handleCheckboxChanged = (e: SyntheticEvent) => {
    if (!formRef.current) return;
    const checkboxes = formRef.current.querySelectorAll<HTMLInputElement>(
      ".cart_item_checkbox"
    );
    const targetInput = e.target as HTMLInputElement;
    const data = new FormData(formRef.current);
    const selectCount = data.getAll("select-item").length;

    if (targetInput.classList.contains("select-all")) {
      const allChecked = targetInput.checked;
      checkboxes.forEach((inputElem) => {
        inputElem.checked = allChecked;
      });
    } else {
      const allChecked = selectCount === items.length;
      formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
        allChecked;
    }
  };
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

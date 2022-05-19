import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { checkedCartState } from "../recoils/cart";
import CartItem from "./CartItem";
import ItemData from "./itemData";

const WillPay = () => {
  const checkedItems = useRecoilValue(checkedCartState);
  const navigate = useNavigate();
  const totalPrice = checkedItems.reduce((acc, item, idx) => {
    acc += item.amount * item.price;
    return acc;
  }, 0);
  const handleSubmit = () => {
    if (checkedItems.length) navigate("/payment");
  };
  return (
    <>
      <WillPayContainer>
        {checkedItems.map((el) => {
          return (
            <li>
              <ItemData
                title={el.title}
                imageUrl={el.imageUrl}
                price={el.price}
                key={el.id}
              />
              <p>수량 : {el.amount}</p>
              <p>금액 : {(el.price * el.amount).toLocaleString()}</p>
            </li>
          );
        })}
      </WillPayContainer>
      <p>총 금액 : {totalPrice.toLocaleString()}</p>
      <button onClick={handleSubmit}>결제</button>
    </>
  );
};

export default WillPay;

const WillPayContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none; ;
`;

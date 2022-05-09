import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  return (
    <GnbContainer>
      <Ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">상품 목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </Ul>
    </GnbContainer>
  );
};

export default Gnb;
const GnbContainer = styled.nav`
  width: 100%;
  max-width: 900px;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  li {
    text-decoration: none;
  }
`;

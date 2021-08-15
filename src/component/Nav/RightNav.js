import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
list-style: none;
display: flex;
li {
    padding: 18px 10px;
}
flex-flow: column nowrap;
background-color: rgba(182, 179, 140, 0.89);
position: fixed;
transform: ${({ open }) => open ? 'translateY(0px)' : 'translateY(-410px)'};
top: 0;
left: 0;
height: 45vh;
width: 100%;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
li {
  color: #fff;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Libeol&Shoppingについて</li>
      <li>カテゴリーから選ぶ</li>
      <li>ログイン</li>
      <li>新規登録</li>
    </Ul>
  )
}

export default RightNav
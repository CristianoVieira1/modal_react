import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  background: linear-gradient(270deg,#8942a8,#4439a7);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    background: linear-gradient(220deg,#582d6b,#2d2294);
  }
`;
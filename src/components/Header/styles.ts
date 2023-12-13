import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

 
`;
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.text`
    font-size: 30px;
    font-weight: 600;

`;
export const Button = styled.button`
      height: 35px;
      padding: 8px;
      background: #596ac1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }


`;
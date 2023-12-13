import styled from "styled-components";
import { darken } from "polished";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(250px,1fr) );
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
      align-self: center;
      max-width: 250px;
      max-height: 150px;
      border-radius: 5px;
      border: 3px solid #596ac1;
    }

    button {
      height: 35px;
      background: #596ac1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
    .info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      margin: 10px 0;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        margin-top: 5px ;

        
      strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
      }
      span {
        font-size: 21px;
        font-weight: bold;
      }
      }
    }
  }
`;

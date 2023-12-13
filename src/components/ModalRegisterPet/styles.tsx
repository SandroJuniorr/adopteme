import styled from 'styled-components';
import { darken } from "polished";

export const InputContainer = styled.div`

margin-top: 15px;
input{
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: solid 1px gray;
}
`;
export const Form = styled.form`
  padding: 8px;
  border-radius: 5px;

  button{
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    margin-top: 15px;
    background-color: #596ac1;
    color: white;
    border: none;

    &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
  }
`;

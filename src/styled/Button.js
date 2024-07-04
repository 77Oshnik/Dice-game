
import styled from "styled-components"

export const Button=styled.button`
    background-color: black;
    color: white;
    min-width: 220px;
    padding:10px 18px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in;
    cursor:pointer ;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: background-color 0.3s ease-in;
    }
`
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
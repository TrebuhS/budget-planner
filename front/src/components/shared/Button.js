import styled from "styled-components";

export default styled.button`
  border: none;
  padding: 10px 20px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 200px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  //letter-spacing: 1px;
`;

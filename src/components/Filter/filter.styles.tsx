import styled from "styled-components";

export const InputFilter = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #111;
  }
`;

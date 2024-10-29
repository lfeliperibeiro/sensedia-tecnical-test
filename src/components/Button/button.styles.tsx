import { Button } from "react-aria-components";
import styled from "styled-components";

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  color: #fff;
  background-color: ${(props) => (props.isActive ? "green" : "#111")};
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  text-decoration: none;

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

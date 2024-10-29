import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 50%;

  @media (max-width: 799px) {
    flex-direction: column;
    width: 100%;
  }
`;

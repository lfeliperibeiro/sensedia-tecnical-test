import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 900px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

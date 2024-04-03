import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr 6fr 1fr;
  gap: 1rem;
  h5 {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: #999999;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

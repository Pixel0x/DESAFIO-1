import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--bg-main);
  padding: 0 1.25rem;

  &:first-child {
    margin-top: 6.25rem;
  }

  &:last-child {
    margin-bottom: 6.25rem;
  }
`;

export const Card = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5625rem;
  background: var(--white);
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;

  box-shadow: 0px 0px 0.625rem rgba(19, 19, 31, 0.05);
  border-radius: 0.3125rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: var(--gray);
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.625rem;
    line-height: 2rem;
    font-weight: 400;
    padding: 1.25rem 0px 0.625rem 0px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--gray);
  }
`;

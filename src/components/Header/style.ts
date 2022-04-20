import styled from "styled-components";

export const CHeader = styled.header`
  width: 100%;
  background: var(--linear);
  padding: 1.25rem;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2.5rem;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.375rem;

  span {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: var(--white);
  }
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.3125rem;

  input {
    width: 100%;
    background: transparent;
    border: none;
    font-family: "Inter", sans-serif;
    color: var(--white);
    font-size: 1.125rem;

    &::placeholder {
      opacity: 0.5;
      color: var(--white);
    }

    &:focus-visible {
      outline: none;
    }
  }

  label {
    padding: 1.25rem;
  }
`;

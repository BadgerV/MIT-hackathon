import styled from "styled-components";

export const ComingSoonContainer = styled.div`
  min-height: 70vh;
  /* background-color: #111010; */
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ComingSoonHeader = styled.div`
  width: 18rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;

  h1 {
    font-size: 1.5rem;
    font-family: "Chillax";
  }

  span {
    font-size: 0.75rem;
    font-weight: 200;
  }
`;

export const ComingSoonCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 4rem;
  column-gap: 7rem;
  place-items: center;

  @media screen and (max-width: 878px) {
    column-gap: 4rem;
  }

  @media screen and (max-width: 809px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 527px) {
    grid-template-columns: 1fr;
  }
`;

export const ComingSoonCategory = styled.div`
  width: 12rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-height: 5rem;
    display: block;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: 1.5rem;
      font-family: "Chillax";
    }

    span {
      font-size: 0.75rem;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 527px) {
    width: 70%;

    h1 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

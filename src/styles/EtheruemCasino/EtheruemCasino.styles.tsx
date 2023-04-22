import styled from "styled-components";

export const EtheruemCasinoContainer = styled.div`
  /* background-color: #111010; */
  padding: 7rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #ffffff;
`;

export const EtheruemCasinoContent = styled.div`
  width: 60%;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 200;
    line-height: 150%;
    font-family: "Chillax";
    display: block;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 535px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const EtheruemCasinoButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media screen and (max-width: 535px) {
    width: 100%;
    gap: 0;
    padding: 0 1.5rem;
    justify-content: space-between;
  }
`;

export const EtheruemCasinoButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  outline: none;
  border: none;
  background-color: #1e2124;

  padding: 0.7rem 1rem;
  border-radius: 10px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

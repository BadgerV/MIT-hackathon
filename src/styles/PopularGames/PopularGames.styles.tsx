import styled from "styled-components";

export const PopularGamesContainer = styled.div`
  /* background-color: #111010; */
  padding: 1rem 4rem;

  .div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 522px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

export const PouplarGameHeader = styled.span`
  font-size: 2rem;
  font-weight: 800;
  display: block;
`;

export const PopularGameContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 1rem;

  @media screen and (max-width: 1143px) {
    grid-template-columns: 2fr 1.8fr;
  }

  @media screen and (max-width: 962px) {
    grid-template-columns: 1fr;
  }
`;

export const PopulargameLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  border-radius: 10px;

  background-color: #1f1e1e;

  .flip {
    font-size: 0.8rem;
    font-weight: 200;
    font-family: "Cabinet Grotesk";
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
  span {
    font-family: "Chillax";
    font-weight: 300;
  }

  .img {
    display: block;
    height: 250px;
  }

  @media screen and (max-width: 1180px) {
    padding: 2rem;
    img {
      max-height: 200px;
    }
  }

  @media screen and (max-width: 1044px) {
    padding: 1.5rem;
    img {
      max-height: 180px;
    }
  }

  @media screen and (max-width: 981px) {
    padding: 1rem 2rem;

    .img {
      height: 150px;
    }
  }

  @media screen and (max-width: 570px) {
    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
    span {
      font-size: 0.7rem;
    }
  }
`;
export const PopulargameRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 962px) {
    flex-direction: row;
  }
  @media screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

export const PopularGameSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 10px;

  background-color: #1f1e1e;

  .flip {
    font-size: 0.8rem;
    font-weight: 200;
    font-family: "Cabinet Grotesk";
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
  }
  span {
    font-family: "Chillax";
    font-weight: 300;
    font-size: 0.8em;
    display: block;
    width: 90%;
  }
  .img {
    height: 100px;
  }

  @media screen and (max-width: 962px) {
    justify-content: space-between;
    padding: 1rem 2rem;
    flip {
      font-size: 0.8rem;
      font-weight: 200;
      font-family: "Cabinet Grotesk";
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
    }
    span {
      font-family: "Chillax";
      font-weight: 300;
    }

    .img {
      display: block;
    }

    @media screen and (max-width: 962px) {
      .img {
        height: 10;
      }
    }
  }

  @media screen and (max-width: 935px) {
    h1 {
      font-size: 2rem;
    }

    .img {
      height: 80px;
    }
  }

  @media screen and (max-width: 810px) {
    .flip {
      font-size: 0.8rem;
      font-weight: 200;
      font-family: "Cabinet Grotesk";
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
    }
    span {
      font-family: "Chillax";
      font-weight: 300;
    }
  }

  @media screen and (max-width: 570px) {
    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
    span {
      font-size: 0.7rem;
    }
  }
`;

export const PopularButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Chillax";
  font-weight: bold;
  gap: 0.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.1s ease-in-out;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  width: max-content;

  span {
    color: white;
  }

  &:hover {
    scale: 0.98;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

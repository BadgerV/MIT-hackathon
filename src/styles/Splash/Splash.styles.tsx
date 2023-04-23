import styled from "styled-components";

export const SplashContainer = styled.div`
  /* background-color: #111010; */
  min-height: 100vh;

  padding: 2rem 1rem;
  position: relative;

  @media screen and (max-width: 724px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
      url("/assets/images/Hero.png");
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: contain;
  }
`;

export const SplashContent = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: fit-content;

  margin-top: 8rem;
  margin-left: 5rem;

  @media screen and (max-width: 708px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 430px) {
    margin-left: 1rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 800;

    @media screen and (max-width: 430px) {
      font-size: 2.3rem;
    }
  }

  span {
    font-family: "Chillax";
    font-weight: 200;

    margin-bottom: 1rem;
  }
`;

export const SplashCategories = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media screen and (max-width: 450px) {
    gap: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const SplashCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  max-width: fit-content;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    margin: 0;
    font-weight: 300;
    font-size: 0.8rem;

    position: relative;
  }

  .bigger {
    font-size: 0.9rem;
  }

  .icon {
    position: absolute;
    right: 1.5rem;
    top: 0.2rem;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #17ff2e;
  }
`;

export const SplashImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 966px) {
    height: 25rem;
  }

  @media screen and (max-width: 724px) {
    display: none;
  }
`;

export const SplashButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Chillax";
  font-weight: bold;
  gap: 0.2rem;

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
`;

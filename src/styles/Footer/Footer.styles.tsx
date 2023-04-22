import styled from "styled-components";

export const FooterContainer = styled.div`
  /* background-color: #111010; */
  padding: 1.5rem 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 1.5rem 3rem;
  }

  @media screen and (max-width: 690px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 632px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }

  @media screen and (max-width: 400px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const FooterLogo = styled.img`
  @media screen and (max-width: 476px) {
    max-height: 40px;
  }

  @media screen and (max-width: 360px) {
    max-height: 35px;
  }
`;

export const FooterText = styled.span`
  font-size: 0.8rem;
  font-weight: 200;

  @media screen and (max-width: 632px) {
    text-align: right;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 632px) {
    position: relative;
    left: 75%;
    justify-content: center;

    img {
      max-height: 40px;
    }
  }
`;

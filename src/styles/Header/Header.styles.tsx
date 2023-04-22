import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderInner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;

  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.1s ease-in-out;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 0.5rem 1rem;

  span {
    color: white;
  }

  &:hover {
    scale: 0.98;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
`;

import {
  HeaderButton,
  HeaderContainer,
  HeaderInner,
} from "../styles/Header/Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <img src="/assets/images/logo.svg" height={35} alt="logo" />

        <HeaderButton>
          <span>Connect Wallet</span>
          <img src="/assets/images/arrow-button.svg" alt="Button" />
        </HeaderButton>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

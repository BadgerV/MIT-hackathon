import {
  FooterContainer,
  FooterLogo,
  FooterSocials,
  FooterText,
} from "../styles/Footer/Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src="/assets/images/logo.svg" alt="logo" height={50} />
      <FooterText>© 2023 Etherino. All Rights Reserved. </FooterText>

      <FooterSocials>
        <img src="/assets/images/facebook.svg" alt="Facebook" height={50} />
        <img src="/assets/images/linked.svg" alt="LinkedIn" height={50} />
        <img src="/assets/images/twitter.svg" alt="Twitter" height={50} />
      </FooterSocials>
    </FooterContainer>
  );
};

export default Footer;

import {
  EtheruemCasinoButton,
  EtheruemCasinoButtonsCont,
  EtheruemCasinoContainer,
  EtheruemCasinoContent,
} from "../styles/EtheruemCasino/EtheruemCasino.styles";

const EtheruemCasino = () => {
  return (
    <EtheruemCasinoContainer>
      <EtheruemCasinoContent>
        <h1>Ethereum + Casino</h1>
        <span>
          Join the decentralized gaming revolution with Etherino and enjoy
          complete transparency, lightning-fast transactions, low fees, huge
          rewards, cutting-edge technology, and a wide range of classic and
          innovative casino games on our platform, all while being part of our
          vibrant community of gamers.
        </span>
      </EtheruemCasinoContent>

      <EtheruemCasinoButtonsCont>
        <EtheruemCasinoButton>
          <img src="/assets/images/eyes.png" alt="" />
          Team
        </EtheruemCasinoButton>

        <EtheruemCasinoButton>
          <img src="/assets/images/hand.png" alt="" />
          Contact
        </EtheruemCasinoButton>
      </EtheruemCasinoButtonsCont>
    </EtheruemCasinoContainer>
  );
};

export default EtheruemCasino;

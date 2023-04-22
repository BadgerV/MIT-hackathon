import {
  SplashButton,
  SplashCategories,
  SplashCategory,
  SplashContainer,
  SplashContent,
  SplashImage,
} from "../styles/Splash/Splash.styles";
import Header from "./Header";

const Splash = () => {
  return (
    <SplashContainer>
      <Header />

      <SplashContent>
        <h1>
          Play your favorite <br />
          casino games on the
          <br /> blockchain with Etherino.
        </h1>

        <span>
          Enjoy complete transparency and fairness with our decentralized
          platform
        </span>

        <SplashCategories>
          <SplashCategory>
            <span>
              <span className="icon"></span>Online
            </span>
            <span className="bigger">3, 589, 482</span>
          </SplashCategory>

          <SplashCategory>
            <span>Total Won</span>
            <span className="bigger">
              <img src="assets/images/numbers.png" alt="alt" height={15} />
              3, 589, 482
            </span>
          </SplashCategory>

          <SplashCategory>
            <span>Highest Last 24Hrs</span>
            <span className="bigger">
              <img src="assets/images/numbers.png" alt="alt" height={15} />
              8.726
            </span>
          </SplashCategory>
        </SplashCategories>

        <SplashButton>
          Let's Play
          <img
            src="assets/images/arrow_down_button.svg"
            alt="down"
            height={10}
          />
        </SplashButton>
      </SplashContent>

      <SplashImage src="/assets/images/Hero.png" height={500} />
    </SplashContainer>
  );
};

export default Splash;

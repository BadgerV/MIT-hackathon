import ComingSoon from "./components/ComingSoon";
import EtheruemCasino from "./components/EtheruemCasino";
import Footer from "./components/Footer";
import PopularGames from "./components/PopularGames";
import Splash from "./components/Splash";
import { GlobalStyle } from "./styles/Main.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Splash />
      <ComingSoon />
      <PopularGames />
      <EtheruemCasino />
      <Footer />
    </>
  );
};

export default App;

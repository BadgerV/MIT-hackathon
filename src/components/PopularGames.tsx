import {
  PopularButton,
  PopularGameContent,
  PopularGameSmall,
  PopularGamesContainer,
  PopulargameLeft,
  PopulargameRight,
  PouplarGameHeader,
} from "../styles/PopularGames/PopularGames.styles";

const PopularGames = () => {
  return (
    <PopularGamesContainer>
      <div className="div">
        <PouplarGameHeader>Popular Games</PouplarGameHeader>
        <span>
          Show All
          <img src="/assets/images/vector.png" alt="" />
        </span>
      </div>
      <PopularGameContent>
        <PopulargameLeft>
          <div>
            <span className="flip">Flip your luck With</span>
            <h1>Coin Toss</h1>
            <span>
              Experience the Thrill of Chance with Our Provably Fair Coin Toss
              Game.
            </span>
            <PopularButton>
              Play Now
              <img src="assets/images/controller.png" alt="down" height={12} />
            </PopularButton>
          </div>

          <img src="/assets/images/coin_group.png" className="img" alt="Coin" />
        </PopulargameLeft>

        <PopulargameRight>
          <PopularGameSmall>
            <div>
              <span className="flip">Flip your luck With</span>
              <h1>Roll Dice</h1>
              <span>
                Roll the Dice and Watch Your Eth’s Multiply with Our Provably
                Fair Game
              </span>
              <PopularButton>
                Play Now
                <img
                  src="assets/images/controller.png"
                  alt="down"
                  height={12}
                />
              </PopularButton>
            </div>

            <img
              src="/assets/images/dice_group.png"
              className="img"
              alt="Coin"
            />
          </PopularGameSmall>

          <PopularGameSmall>
            <div>
              <span className="flip">Flip your luck With</span>
              <h1>Spin the wheel</h1>
              <span>
                Experience the Excitement of Our Provably Fair Spin the Wheel
                Game and Win Huge Rewards
              </span>
              <PopularButton>
                Play Now
                <img
                  src="assets/images/controller.png"
                  alt="down"
                  height={12}
                />
              </PopularButton>
            </div>

            <img
              src="/assets/images/machine_group.png"
              alt="Coin"
              className="img"
            />
          </PopularGameSmall>
        </PopulargameRight>
      </PopularGameContent>
    </PopularGamesContainer>
  );
};

export default PopularGames;

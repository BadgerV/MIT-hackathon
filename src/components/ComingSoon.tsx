import {
  ComingSoonCategories,
  ComingSoonCategory,
  ComingSoonContainer,
  ComingSoonHeader,
} from "../styles/ComingSoon/ComingSoon.styles";

const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <ComingSoonHeader>
        <h1>Coming Soon</h1>
        <span>
          Stay tuned for exciting updates and new features that will make your
          gaming experience even more thrilling
        </span>
      </ComingSoonHeader>

      <ComingSoonCategories>
        <ComingSoonCategory>
          <img src="/assets/images/games.png" alt="games" height={110} />
          <div>
            <h1>More Games</h1>
            <span>
              Enjoy a growing selection of exciting games, including classic
              card games, popular favorites like Poker, and unique options like
              Plinko and Rock Paper Scissors.
            </span>
          </div>
        </ComingSoonCategory>

        <ComingSoonCategory>
          <img src="/assets/images/leaderboard.png" alt="games" height={110} />
          <div>
            <h1>Leaderboard</h1>
            <span>
              Compete against other players and climb to the top of our
              LeaderBoard, tracking your wins and losses for ultimate bragging
              rights
            </span>
          </div>
        </ComingSoonCategory>

        <ComingSoonCategory>
          <img src="/assets/images/security.png" alt="games" height={110} />
          <div>
            <h1>Security</h1>
            <span>
              Play with even greater flexibility and security by using our ERC20
              token, which allows you to access our platform alongside the
              reliable Matic network
            </span>
          </div>
        </ComingSoonCategory>

        <ComingSoonCategory className="extra">
          <img src="/assets/images/avatar.png" alt="games" height={110} />
          <div>
            <h1>NFT Avatar</h1>
            <span>
              Dive into the world of NFTs and unlock unique, valuable assets
              with our upcoming collection, available exclusively on the
              Ethereum blockchain.
            </span>
          </div>
        </ComingSoonCategory>

        <ComingSoonCategory className="extra">
          <img src="/assets/images/social.png" alt="games" height={110} />
          <div>
            <h1>Social Connect</h1>
            <span>
              Allow players to connect and communicate with each other through
              social features like chat, forums, and private messaging
            </span>
          </div>
        </ComingSoonCategory>
      </ComingSoonCategories>
    </ComingSoonContainer>
  );
};

export default ComingSoon;

import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import game_ludo from "../../assets/game_ludo.gif";
import game_card from "../../assets/game_card.gif";
import game_casino from "../../assets/game_casino.gif";

const Games = () => {
  return (
    <>
      <div className="container pb-5" style={{ paddingTop: "90px" }}>
        <CardContainer
          id="game-ludo"
          imgUrl={game_ludo}
          imgHeight={430}
          leftId="game-ludo-leftCard"
          rightId="game-ludo-rightCard"
          titleVisible={true}
          title="Games"
          subTitle="Ludo"
          subDesc="Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Like other cross and circle games, Ludo is derived from the Indian game Pachisi."
          subDivPadding={100}
          reverse={false}
        />
        <CardContainer
          id="game-rummy"
          imgUrl={game_card}
          imgHeight={550}
          leftId="game-rummy-leftCard"
          rightId="game-rummy-rightCard"
          titleVisible={false}
          title="Services"
          subTitle="Rummy"
          subDesc="Rummy : any of several card games for two or more players in which each player tries to assemble groups of three or more cards of the same rank or of consecutive sequence in the same suit and to be the first to meld them all see also gin rummy."
          subDivPadding={100}
          reverse={true}
        />
        <CardContainer
          id="game-casino"
          imgUrl={game_casino}
          imgHeight={400}
          leftId="game-casino-leftCard"
          rightId="game-casino-rightCard"
          titleVisible={false}
          title="Services"
          subTitle="Casino"
          subDesc="casino, also spelled cassino, card game for two to four players, best played with two. A 52-card deck is used. When two play, the dealer deals two cards facedown to the opponent, two cards faceup to the table, and two more facedown to himself and then repeats the process so that all have four cards."
          subDivPadding={50}
          reverse={false}
        />
      </div>
    </>
  );
};

export default Games;

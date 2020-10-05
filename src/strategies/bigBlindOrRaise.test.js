const defaultGameState = require("../defaultGameState");
const GameState = require("../GameState");
const { bigBlindOrRaise } = require("./bigBlindOrRaise");

function createGameStateWithCard(holeCards) {
  return new GameState({
    ...defaultGameState,
    players: [
      defaultGameState.players[0],
      {
        ...defaultGameState.players[1],
        hole_cards: holeCards,
      },
    ],
  });
}

describe("bigBlindOrRaise", () => {
  it("bets the big blind if we don't have a pair", () => {
    const holeCards = [
      {
        rank: "6",
        suit: "hearts",
      },
      {
        rank: "8",
        suit: "spades",
      },
    ];
    const gameState = createGameStateWithCard(holeCards);
    expect(bigBlindOrRaise(gameState)).toBe(gameState.bigBlind());
  });

  it("bets 500 if we have a pair", () => {
    const holeCards = [
      {
        rank: "6",
        suit: "hearts",
      },
      {
        rank: "6",
        suit: "spades",
      },
    ];
    const gameState = createGameStateWithCard(holeCards);
    expect(bigBlindOrRaise(gameState)).toBe(500);
  });
});
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
  it("calls if we have low cards", () => {
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
    expect(bigBlindOrRaise(gameState)).toBe(gameState.toCall());
  });

  it("bets 500 if we have a pair", () => {
    const holeCards = [
      {
        rank: "10",
        suit: "hearts",
      },
      {
        rank: "10",
        suit: "spades",
      },
    ];
    const gameState = createGameStateWithCard(holeCards);
    expect(bigBlindOrRaise(gameState)).toBe(500);
  });
});

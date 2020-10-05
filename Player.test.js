const Player = require("./Player");
const defaultGameState = require("./src/defaultGameState");

describe("Player", () => {
  const gameState = defaultGameState;

  it("bets a number", () => {
    const mock = jest.fn();
    Player.betRequest(gameState, mock);
    expect(mock).toHaveBeenCalledWith(expect.any(Number));
  });

  it("does not log an error", () => {
    console.error = jest.fn();
    const mock = jest.fn();
    Player.betRequest(gameState, mock);
    expect(console.error).not.toHaveBeenCalled();
  });
});

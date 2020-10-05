const GameState = require("./src/GameState");
const { bigBlindOrRaise } = require("./src/strategies/bigBlindOrRaise");

class Player {
  static get VERSION() {
    return "0.3";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    try {
      bet(bigBlindOrRaise(game));
    } catch (error) {
      console.error(error);
      bet(0);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;

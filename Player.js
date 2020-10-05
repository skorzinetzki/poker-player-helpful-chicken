const GameState = require("./src/GameState");
const bigBlindOrRaise = require("./src/strategies/bigBlindOrRaise");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    bet(bigBlindOrRaise(game));
  }

  static showdown(gameState) {}
}

module.exports = Player;

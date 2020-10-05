const GameState = require("./src/GameState");
const bigBlindOrRaise = require("./src/strategies/callOrRaise");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    if (true) {
      bet(game.bigBlind());
      return;
    }

    bet(bigBlindOrRaise(game));
    return;
  }

  static showdown(gameState) {}
}

module.exports = Player;

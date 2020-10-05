const GameState = require("./src/GameState");
const callOrRaise = require("./src/strategies/callOrRaise");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    bet(callOrRaise(game));
    return;
  }

  static showdown(gameState) {}
}

module.exports = Player;

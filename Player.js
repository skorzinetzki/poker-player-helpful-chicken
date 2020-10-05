const GameState = require("./src/GameState");
const { callOrRaise } = require("./src/strategies/callOrRaise");
const {
  callOrRaiseBasedOnScore,
} = require("./src/strategies/callOrRaiseBasedOnScore");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    bet(callOrRaiseBasedOnScore(game));
  }

  static showdown(gameState) {}
}

module.exports = Player;

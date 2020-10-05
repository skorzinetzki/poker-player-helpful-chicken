const GameState = require("./src/GameState");
const calculateBet = require("./src/calculateBet");

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

    bet(calculateBet(game));
    return;
  }

  static showdown(gameState) {}
}

module.exports = Player;

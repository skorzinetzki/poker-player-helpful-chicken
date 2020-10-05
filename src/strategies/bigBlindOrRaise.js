function bigBlindOrRaise(game) {
  return shouldBet(game) ? game.toRaiseByBlinds(1) : game.toCall();
}

function shouldBet(gameState) {
  return gameState.me().score() >= 10;
}

module.exports = { bigBlindOrRaise };

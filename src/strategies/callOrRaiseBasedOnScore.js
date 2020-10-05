function callOrRaiseBasedOnScore(game) {
  return shouldBet(game) ? game.toRaiseByBlinds(1) : game.call();
}

function shouldBet(gameState) {
  return gameState.me().score() >= 10;
}

module.exports = { callOrRaiseBasedOnScore };

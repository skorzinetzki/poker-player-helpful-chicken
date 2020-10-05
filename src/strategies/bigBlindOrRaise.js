function bigBlindOrRaise(game) {
  return shouldBet(game) ? game.toRaiseByBlinds(1) : game.bigBlind();
}

function shouldBet(gameState) {
  return gameState.me().hasPocketPair();
}

module.exports = { bigBlindOrRaise };

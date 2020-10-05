function callOrRaise(game) {
  return shouldBet(game) ? game.toRaiseByBlinds(1) : game.call();
}

function shouldBet(gameState) {
  return gameState.me().hasPocketPair();
}

module.exports = { callOrRaise };

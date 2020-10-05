module.exports = function calculateBet(game) {
  return shouldBet(game) ? game.toRaiseByBlinds(1) : 0;
};

function shouldBet(gameState) {
  return gameState.me().hasPocketPair();
}

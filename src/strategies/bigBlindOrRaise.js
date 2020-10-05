function bigBlindOrRaise(game) {
  const score = game.me().score();
  if (score <= 5) {
    return 0;
  }
  if (score < 10) {
    return game.toCall();
  }
  return game.toRaiseByBlinds(1);
}

module.exports = { bigBlindOrRaise };

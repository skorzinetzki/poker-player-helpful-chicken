function bigBlindOrRaise(game) {
  const round = game.round();
  const score = game.me().score();

  if (round > 3) {
    if (score < 10) {
      return game.toCall();
    }
    return game.toRaiseByBlinds(1);
  }

  if (score <= 5) {
    return 0;
  }
  if (score < 10) {
    return game.toCall();
  }
  return game.toRaiseByBlinds(1);
}

module.exports = { bigBlindOrRaise };

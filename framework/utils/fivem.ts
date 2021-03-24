export const Delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function getDistance(player: number[], target: number[]) {
  return (
    player
      .map((x, i) => Math.abs(x - target[i]) ** 2) // square the difference
      .reduce((sum, now) => sum + now) ** // sum
    (1 / 2)
  );
}

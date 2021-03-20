import { getPlayerFromSource, Player } from "./player/player.controller";

RegisterCommand('getplayer', (source: any) => {
  const player = getPlayerFromSource(source);
  console.log("PLAYER: ", player);
}, false);

RegisterCommand('giveweapon', (source: number, args: string[]) => {
  new Player(source).giveWeapon(args[0]);
}, false);
// angular meme

interface PlayerProps {
  name: string;
  identifier: string;
  source: number;
}

export const PlayersBySource = new Map<number, PlayerProps>();
export const PlayersByIdentifiers = new Map<string, PlayerProps>();

export function getPlayerFromSource(source: number) {
  return PlayersBySource.get(source);
}

export function getPlayerFromIdentifier(identifier: string) {
  return PlayersByIdentifiers.get(identifier);
}

export class Player {
  playerSource: number;
  constructor(pSource: number) {
    this.playerSource = pSource;
  }

  public giveWeapon(weaponName: string) {
    emitNet('redGunGame:giveWeapon', this.playerSource, weaponName);
  }
}

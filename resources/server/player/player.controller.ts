// angular meme

interface Player {
  name: string;
  identifier: string;
  source: number;
}

export const PlayersBySource = new Map<number, Player>();
export const PlayersByIdentifiers = new Map<string, Player>();

export function getPlayerFromSource(source: number) {
  return PlayersBySource.get(source);
}

export function getPlayerFromIdentifier(identifier: string) {
  return PlayersByIdentifiers.get(identifier);
}

//TODO: Create a Player class
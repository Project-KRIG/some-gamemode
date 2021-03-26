import { Player } from '@/types/player';

export const PlayersBySource = new Map<number, Player>();
export const PlayersByIdentifier = new Map<string | undefined, Player>();

export const getPlayerBySource = (source: number) => {
  return PlayersBySource.get(source);
};

import { PlayersBySource } from '@/base/server/player/player.controller';

export const getPlayerBySource = (source: number) => {
  return PlayersBySource.get(source);
};

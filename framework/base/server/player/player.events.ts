import {
  PlayersByIdentifier,
  PlayersBySource,
} from '@/base/server/player/player.controller';
import { getPlayerBySource } from '@/base/server/functions';

on('playerJoining', () => {
  const pSource = (global as any).source;

  const playerIdentifiers = getPlayerIdentifiers(pSource.toString());

  let playerLicense;
  for (const identifier of playerIdentifiers) {
    if (identifier.includes('license:')) {
      playerLicense = identifier.split(':')[1];
    }
  }
  const playerName = GetPlayerName(pSource);

  PlayersBySource.set(pSource, {
    source: pSource,
    identifier: playerLicense,
    name: playerName,
  });

  PlayersByIdentifier.set(playerLicense, {
    source: pSource,
    identifier: playerLicense,
    name: playerName,
  });
});

on('playerDropped', () => {
  const pSource: number = (global as any).source;
  const Player = getPlayerBySource(pSource);

  try {
    PlayersBySource.delete(pSource);
    PlayersByIdentifier.delete(Player.identifier);
  } catch (err) {
    console.log(err.message);
  }
});

import { Players } from "./player";

on('playerJoining', () => {
  const pSource = (global as any).source;

  const playerIdentifiers = getPlayerIdentifiers(pSource.toString());

  const playerName: string = GetPlayerName(pSource);

  // Parse specifically for license identifier as its
  // guranteed
  let playerIdentifer;
  for (const identifier of playerIdentifiers) {
    if (identifier.includes('license:')) {
      playerIdentifer = identifier.split(':')[1];
    }
  }

  Players.set(pSource, { source: pSource, identifier: playerIdentifer, name: playerName })


})
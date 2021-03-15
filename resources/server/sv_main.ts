import { getPlayerFromSource, PlayersByIdentifiers, PlayersBySource } from "./player/player.controller";

on('playerJoining', () => {
  const pSource: number = (global as any).source;  

  try {
    const playerIdentifiers = getPlayerIdentifiers(pSource.toString())

    // waterloo(p)
    let playerIdentifier;
    for (const identifier of playerIdentifiers) {
      if (identifier.includes('license')) {
        playerIdentifier = identifier.split(':')[1];
      }
    }

    const playerName = GetPlayerName(pSource.toString());

    // sets a map - using source and identfifiers, because both is useful
    PlayersBySource.set(pSource, { name: playerName, identifier: playerIdentifier, source: pSource })
    PlayersByIdentifiers.set(playerIdentifier, { name: playerName, identifier: playerIdentifier, source: pSource })

  } catch (error) {
    console.log(error)
  }
})

on('playerDropped', (reason: string) => {
  const pSource = (global as any).source;

  // We've have to create functions like 'getIdentifier' etc.. aswell as a logger
  try {
    const Player = getPlayerFromSource(pSource);

    PlayersByIdentifiers.delete(Player.identifier);
    PlayersBySource.delete(pSource);
  } catch (error) {
    console.log(error)
  }
})
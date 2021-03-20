import { getPlayerFromSource, PlayersByIdentifiers, PlayersBySource } from "./player.controller";
import db from 'quick.db';

on('playerJoining', () => {
	const pSource = (global as any).source;

	const playerIdentifiers = getPlayerIdentifiers(source.toString());


	let playerLicense;
	for (const identifier of playerIdentifiers) {
		if (identifier.includes('license:')) {
			playerLicense = identifier.split(':')[1];
		}
	}

	const playerName = GetPlayerName(pSource);

	PlayersBySource.set(pSource, { source: pSource, identifier: playerLicense, name: playerName })
	PlayersByIdentifiers.set(playerLicense, { source: pSource, identifier: playerLicense, name: playerName })




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
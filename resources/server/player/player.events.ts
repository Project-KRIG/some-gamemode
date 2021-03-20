import { PlayersByIdentifiers, PlayersBySource } from "./player.controller";

on('playerJoining', () => {
	const pSource = (global as any).source;

	const playerIdentifers = getPlayerIdentifiers(source.toString());

	let playerLicense;
	for (const identifier of playerIdentifers) {
		if (identifier.includes('license:')) {
			playerLicense = identifier.split(':')[1];
		}
	}

	const playerName = GetPlayerName(pSource);

	PlayersBySource.set(pSource, { source: pSource, identifier: playerLicense, name: playerName })
	PlayersByIdentifiers.set(playerLicense, { source: pSource, identifier: playerLicense, name: playerName })

})
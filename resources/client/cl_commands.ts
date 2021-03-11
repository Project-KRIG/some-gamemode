import { Delay } from '../utils/fivem';
 
async function spawnHorse(horseName: string) {
  const model = GetHashKey(horseName);
  const pos = GetEntityCoords(PlayerPedId(), true);
  const horse: string = Citizen.invokeNative('0xD49F9B0955C367DE', model, pos[0] + 2, pos[1], pos[2], 100.0, true, true, true, true);

  RequestModel(horse);

  while (!HasModelLoaded(horse)) {
    await Delay(100);
  }

  Citizen.invokeNative('0x283978A15512B2FE', horse, true);
}

RegisterCommand('spawnhorse', async (source: number, args: string[], raw: string) => {
  await spawnHorse(args[1])
}, false);
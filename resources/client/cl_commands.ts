import { Delay } from '../utils/fivem';


async function spawnHorse() {
  const model = GetHashKey('A_C_Horse_AmericanPaint_Greyovero');
  const pos = GetEntityCoords(PlayerPedId(), true);
  const horse = CreateVehicle(model, pos[0], pos[1], pos[2], 100.0, true, true);

  Citizen.invokeNative('0xD49F9B0955C367DE', model, pos[0], pos[1], pos[2], 100.0, true, true, true, true);

  RequestModel(model);

  while (!HasModelLoaded(model)) {
    await Delay(100);
  }

  Citizen.invokeNative('0x283978A15512B2FE', horse, true);
}

RegisterCommand('spawnhorse', async () => {
  console.log('hello there')
  await spawnHorse()
}, false);
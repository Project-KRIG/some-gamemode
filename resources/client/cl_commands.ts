import { Delay } from '../utils/fivem';

async function spawnHorse(horseName: string) {
  console.log(horseName);
  const model = GetHashKey(horseName);
  const pos = GetEntityCoords(PlayerPedId(), true);

  RequestModel(model);

  while (!HasModelLoaded(model)) {
    await Delay(100);
  }

  const horse: number = CreatePed(
    model,
    pos[0] + 2,
    pos[1],
    pos[2],
    100.0,
    1,
    true,
    true,
  );

  Citizen.invokeNative('0x283978A15512B2FE', horse, true);
  Citizen.invokeNative('0xC8A9481A01E63C28', horse, 10);

  //Citizen.invokeNative('0x028F76B6E78246EB', PlayerPedId(), horse, -1, true);
}

RegisterCommand(
  'spawnhorse',
  async (source: number, args: string[], raw: string) => {
    await spawnHorse(args[0]);
  },
  false,
);

async function changePed() {
  const model = GetHashKey('mp_male');
  RequestModel(model);

  while (!HasModelLoaded(model)) {
    RequestModel(model);

    await Delay(100);
  }

  SetPlayerModel(PlayerId(), model);

  SetModelAsNoLongerNeeded(model);

  // SetRandomOutfitVariation
  Citizen.invokeNative('0x283978A15512B2FE', PlayerPedId());

  // ApplyShopItemToPed
  //Citizen.invokeNative('0xD3A7B003ED343FD9', '0x2542A345', true, true, false);

  Citizen.invokeNative('0xD710A5007C2AC539', PlayerPedId(), '0x9925C067', 0);
  Citizen.invokeNative(
    '0xD3A7B003ED343FD9',
    PlayerPedId(),
    '0x8EDC1C92',
    true,
    true,
    true,
  );

  Citizen.invokeNative('0x704C908E9C405136', PlayerPedId());
  Citizen.invokeNative('0xAAB86462966168CE', PlayerPedId(), 1);

  // UpdatePedVariation
  Citizen.invokeNative(
    '0xCC8CA3E88256E58F',
    PlayerPedId(),
    false,
    true,
    true,
    true,
    false,
  );
}

RegisterCommand(
  'changeped',
  async (source: number, args: string[], raw: string) => {
    await changePed();
  },
  false,
);

onNet('redGunGame:giveWeapon', (weaponName: string) => {
  // GiveDelayedWeapon
  Citizen.invokeNative(
    '0xB282DC6EBD803C75',
    PlayerPedId(),
    GetHashKey(weaponName),
    200,
    true,
    2,
  );
});

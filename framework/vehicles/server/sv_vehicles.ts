import { getPlayerBySource } from '@/base/server/player/player.controller';
import { ServerModule } from '@/decorators/ServerModule';

onNet('somthingtriggerd', () => {
  const pSource = (global as any).source;

  const idx = getPlayerBySource(pSource).identifier;
});

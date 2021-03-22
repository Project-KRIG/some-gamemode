import { ClientModule } from '../../decorators/ClientModule';

@ClientModule({ name: 'base' })
class ClientBase {
  init(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}

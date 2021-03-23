export function ServerModule<T, K extends keyof T>(moduleSettings: {
  name: string;
}) {
  return function (target: Function) {
    target.prototype.name = moduleSettings.name;
  };
}

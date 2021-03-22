export function ClientModule<T, K extends keyof T>(mouduleSettings: {
  name: string;
}) {
  return function (target: Function) {
    target.prototype.name = mouduleSettings.name;
  };
}

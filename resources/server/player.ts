
interface Player {
  name: string;
  identifier: string;
  source: number;
}

export const Players = new Map<number, Player>();
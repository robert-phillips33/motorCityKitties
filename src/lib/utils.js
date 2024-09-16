import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const filterByPosition = (data, view) => {
  return data.filter((player) => {
    if (view === 'Pitcher') {
      return player.PositionCategory === 'P';
    } else {
      return player.PositionCategory !== 'P';
    }
  });
};

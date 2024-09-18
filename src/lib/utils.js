import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const filterByPosition = (data, view) => {
  return data.filter((player) => {
    if (view === 'P') {
      return player.PositionCategory === 'P';
    } else {
      return player.PositionCategory !== 'P';
    }
  });
};

export const sortStatsHighToLow = (data, stat) => {
  return data.sort((a, b) => {
    if (a[stat] < b[stat]) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const sortStatsLowToHigh = (data, stat) => {
  return data.sort((a, b) => {
    if (a[stat] > b[stat]) {
      return 1;
    } else {
      return -1;
    }
  });
};

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
};

export const filterData = (data, pitcherOrHitterView) => {
  return data.filter((player) => {
    return pitcherOrHitterView === 'P' ? 
    player.PositionCategory === 'P' : player.PositionCategory !== 'P';
  });
};

export const sortData = (data, field, isAscending) => {
  return data.sort((a, b) => {
    if (isAscending) {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });
};

export const formatBattingAverage = (average) => {
  if (!average) return '.000';
  return average.toFixed(3).replace(/^0/, '');
};

export const formatStat = (stat) => Math.round(stat);


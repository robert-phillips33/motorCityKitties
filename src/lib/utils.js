import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const filterAndSortData = (data, pitcherOrHitterView, field, isAscending) => {
  // Step 1: Filter data based on pitcher or hitter view
  const filteredData = data.filter((player) => {
    return pitcherOrHitterView === 'P' ? player.PositionCategory === 'P' : player.PositionCategory !== 'P';
  });

  // Step 2: Sort the data if a field is provided
  if (field) {
    filteredData.sort((a, b) => {
      if (isAscending) {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
  }

  return filteredData;
};


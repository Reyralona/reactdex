export function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export function title(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

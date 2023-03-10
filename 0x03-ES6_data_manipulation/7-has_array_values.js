export default function hasValuesFromArray(set, arr) {
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}

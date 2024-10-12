export default function hasValuesFromArray(st, arr) {
  for (const ele of arr) {
    if (!st.has(ele)) return false;
  }
  return true;
}

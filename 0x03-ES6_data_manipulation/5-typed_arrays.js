export default function createInt8TypedArray(length, position, val) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const arr = new Int8Array(buffer);
  arr[position] = val;
  const dataView = new DataView(buffer);
  return dataView;
}

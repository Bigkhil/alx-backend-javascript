export default function createInt8TypedArray(length, position, val) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  const arr = new Int8Array(buffer);
  try {
    arr[position] = val;
  } catch (error) {
    throw Error('Position outside range');
  }
  return dataView;
}

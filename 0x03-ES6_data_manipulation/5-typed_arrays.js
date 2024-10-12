export default function createInt8TypedArray(length, position, val) {
  const buffer = new ArrayBuffer(length);
  const arr = new Int8Array(buffer);
  try {
    arr[position] = val;
  } catch (error) {
    throw error;
  }
  const dataView = new DataView(buffer);
  return dataView;
}

export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((ele) => ele.id);
  }
  return [];
}

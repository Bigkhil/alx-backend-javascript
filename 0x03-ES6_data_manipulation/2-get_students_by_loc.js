export default function getStudentsByLocation(arr, city) {
  return arr.filter((ele) => ele.location === city);
}

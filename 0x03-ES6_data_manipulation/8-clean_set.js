export default function cleanSet(st, str) {
  if (str === '') return '';
  const arr = Array.from(st);
  const filtered = arr.filter((ele) => ele.startsWith(str));
  let ret = filtered.reduce((acc, curr) => `${acc}-${curr.substring(str.length)}`, '');
  ret = ret.slice(1);
  return ret;
}

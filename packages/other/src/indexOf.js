/*
*/
export function indexOf(str, a, start) {
  start = start == undefined ? 0 : start;
  for (var i = start; i < str.length; i++) {
      if (str[i] == a) {
          return i;
      }
  }
  return -1;
}
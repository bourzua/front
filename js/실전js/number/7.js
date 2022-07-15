// EPSILONG: 무시할 만한 작은 수
console.log(Number.EPSILON);
function isSimilar(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(isSimilar(0.1 + 0.2, 0.3));
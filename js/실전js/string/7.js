// split: 배열 형태로 반환
const s1 = 'This is my car. The car is mine';
console.log(s1.split(' '));

const arr = s1.split('.');
console.log(arr);
// arr의 모든 아이템에 대하여 공백 제거
console.log(arr.map(item => item.trim()));

console.log(s1.split(' ').join());
console.log(s1.split(' ').join('..'));
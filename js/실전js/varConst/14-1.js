// const로 정의된 객체의 내부 속성값은 수정 가능

const bar = { prop1: 'a' };
bar.prop1 = 'b';
bar.prop2 = 123;
console.log(bar);
const arr = [10, 20];
arr[0] = 100;
arr.push(300);
console.log(arr);
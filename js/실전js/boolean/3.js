const c1 = 123;
const c2 = 'abc';
// 논리 연산자의 결과값은 마지막으로 평가된 값이 된다.
const v1 = c1 && c2;
const v2 = c1 && c2 && 0;
const v3 = c1 && 0 && c2;
console.log({ v1, v2, v3 });

// c1이 true이기 때문에 OR연산자에서 뒤를 볼 필요가 없다.
const v4 = c1 || c2;
const v5 = '' || c2;
console.log({ v4, v5 });

// 논리연산자의 결과값을 boolean으로 만들어주려면 !!를 붙이면 된다.
const v6 = !!(c1 && 0 && c2);
const v7 = !!(c1 || c2);
console.log({ v6, v7 });
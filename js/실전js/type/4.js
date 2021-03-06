// symbol은 유일한 속성 이름을 만들 때 사용한다.
// 이름 충돌 문제를 해결할 수 있다.

const idSymbol = Symbol('id');
const obj = { id: 123 };
obj[idSymbol] = 456;
console.log(obj);

const arr = [];
console.log(arr[Symbol.iterator]);
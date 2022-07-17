const person = {};

// 기본값 설정하는 방법
const name = person.name ?? 'unknown';
//nullish coalescing
// 앞에 있는 것이 undefined이거나 null이면 기본값이 사용된다.
// const name =
//  person.name === undefined || person.name === null ? 'unknown' : person.name;
console.log(name);
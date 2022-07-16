console.log('12'.padStart(5, '0'));
console.log('123'.padStart(5, '0'));
console.log('123'.padStart(5, '*'));
console.log('123'.padEnd(5, '0'));

// match: 정규표현식에 해당하는 문자열 추출
const s1 = 'This is my car. The car is mine';
// T로 시작하는 단어 추출
console.log(s1.match(/T[^\s-]*/g));
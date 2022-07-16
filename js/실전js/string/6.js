const s1 = 'This is my car. The car is mine';
console.log(s1.substr(0, 4));
console.log(s1.substr(5, 2));
console.log(s1.substr(16));

// 첫 번째 단어 출력
let pos = s1.indexOf(' ');
console.log(s1.substr(0, pos));
// 마지막 단어 출력
pos = s1.lastIndexOf(' ');
console.log(s1.substr(pos + 1));

// slice: 두 번째 매개변수 = 인덱스
console.log(s1.slice(5, 7));
// var 키워드로 정의된 변수는 그 변수가 속한 스코프의 최상단으로 끌어올려진다.
console.log(myVar);
var myVar = 1;

// 위의 코드는 아래의 코드와 같다.
// var myVar = undefined;
// console.log(myVar);
// myVar = 1;
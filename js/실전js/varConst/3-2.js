// 즉시 실행 함수로 묶으면 변수의 스코프를 제한할 수 있다.
(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();
console.log('last:', i);
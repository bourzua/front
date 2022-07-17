// AND연산자에서는 앞에 있는 값이 true가 돼야 뒤에 있는 코드가 평가되기 때문에
// if문처럼 사용할 수 있다.
const c1 = 123;
const c2 = 0;
c1 && console.log('log1');
c2 && console.log('log2');
// isSafeInteger로 입력된 숫자가 안전한지 검사할 수 있다.
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

// 안전하지 않은 숫자를 연산에 사용했을 때는 그 결과값의 정확성을 보장할 수 없다.
console.log(9007199254740995 - 10);

// 연산의 안정성을 보장하는 방법1
console.log(9007199254740995n - 10n);

// 연산의 안정성을 보장하는 방법2: 연산에 사용된 두 숫자와 그 결과를 모두 검사, 모두 안전한 숫자라고 나오면 연산 결과를 믿을 수 있다.
const a = 9007199254740995;
const b = 10;
const result = a - b;
console.log(
  Number.isSafeInteger(a),
  Number.isSafeInteger(b),
  Number.isSafeInteger(result)
);
console.log('9007199254740995 - 10 =', result);

const c = 9007199254740991;
const d = 10;
const result2 = c - d;
console.log(
  Number.isSafeInteger(c),
  Number.isSafeInteger(d),
  Number.isSafeInteger(result2)
);
console.log('9007199254740991 - 10 =', result2);
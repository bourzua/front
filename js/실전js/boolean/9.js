// nullish coalescing을 논리 연산자와 함께 사용할 때는 앞부분을 모두 괄호로 묶어줘야 한다.

const name = '';
const title = '';
const text = (name || title) ?? 'foo';
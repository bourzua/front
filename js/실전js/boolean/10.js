// nullish coalescing의 기본값으로 함수 호출을 넣으면 이 함수는 필요한 경우에만 호출이 된다.

const name = {};
function getDefaultName() {
  console.log('called getDefaultName');
  return 'default name';
}
console.log(name.first ?? getDefaultName());
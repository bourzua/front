var n = 1;
function test() {
    console.log(n);
    var n = 2; // 최상단으로 보내짐
    console.log(n);
}

test();
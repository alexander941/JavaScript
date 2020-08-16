var subject = "Just a string";
var probe = typeof subject;// typeof - определяет тип переменного
var test_1 = "abcdef";
var test_2 = 123;
var test_3 = true;
var test_4 = {};
var test_5 = [];
var test_6;
var test_7 = {"abcdef": 123};
var test_8 = {"abcdef": 123};
function test_9(){return "abcdef"};

console.log(probe);
console.log(typeof test_1);
console.log(typeof test_2);
console.log(typeof test_3);
console.log(typeof test_4);
console.log(typeof test_5);
console.log(typeof test_6);
console.log(typeof test_7);
console.log(typeof test_8);
console.log(typeof test_9);
# 解析

```js
function add1(x) {
  console.log(111);
  return x + 1;
}

function add2(x) {
  console.log(222);
  return x + 1;
}

function add3(x) {
  console.log(333);
  return x + 1;
}

console.log(compose(add1, add2, add3)(9));

(...arg) => add1(add2(...arg));

(...args) => add1(add2(add3(...args)));
```

// 定义函数的调用签名
interface IFnCall<IRoot> {
  <TWhy>(fn: (num: IRoot) => TWhy, age: number): TWhy
}

// 定义函数对象
const foo: IFnCall<number> = function (fn, age) {
  return fn(111)
}

// 调用函数
foo<string>(() => {
  return 'aaa'
}, 18)

// 不传入明确的调用时的泛型, 类型推荐
const res = foo((aaa) => {
  return 'aaa'
}, 18)

export {}

type MyReturnType<T extends (...args: any) => unknown> = T extends (
  ...args: any
) => infer P
  ? P
  : never

// 使用  (...args: any) => unknown 来表示任意类型的函数
// 使用 infer P 来推断函数的返回值类型

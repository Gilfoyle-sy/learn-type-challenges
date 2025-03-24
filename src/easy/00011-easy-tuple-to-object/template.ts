type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

// as const的作用是将一个变量变成只读的常量，即不能修改这个变量的值，具体如下
let a = '123' as const
// const a = '123'
type b = typeof a
// 此时b的类型为 '123'，不能修改a的值
// 如果a没有as const，那么b的类型为string，可以修改a的值
let aa = '123'
type bb = typeof aa

// ts中遍历数组的方式
type c = [1, 2, 3, 4, 5]
type d = c[number] // 1 | 2 | 3 | 4 | 5

// PropertyKey是ts中所有键的类型，包括string、number、symbol

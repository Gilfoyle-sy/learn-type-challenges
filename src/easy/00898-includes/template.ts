type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? MyEqual<F, U> extends true
    ? true
    : Includes<R, U>
  : false

// 这里主要是使用了递归，每次取出数组中的第一个元素，然后判断是否等于U，如果等于则返回true，否则继续递归判断剩余的数组元素。
// 这里使用了infer关键字来获取数组中的第一个元素，然后使用extends关键字来判断是否等于U。
// 如果等于则返回true，否则继续递归判断剩余的数组元素。
// 最后如果数组为空，则返回false。
// 这个实现的时间复杂度为O(n)，其中n是数组的长度。
// 这个实现的空间复杂度为O(n)，其中n是递归调用的深度。

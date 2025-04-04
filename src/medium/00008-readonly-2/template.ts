type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

// k extends keyof T = keyof T 表示 K 可以是 T 的所有 key，也可以是 T 的子集
// & 表示将两个类型合并为一个类型
// Omit<T, K> 表示将 T 中 K 的 key 去掉

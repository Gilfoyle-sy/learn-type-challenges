type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// extends keyof 表示 K 必须是 T 的 key
// in keyof T 表示遍历 T 的 key
// as P extends K ? never : P 表示如果 P 是 K 的子集，则忽略，否则保留
// T[P] 表示保留 T 的值

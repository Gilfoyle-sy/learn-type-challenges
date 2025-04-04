type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// in keyof 是遍历T的key
// as P extends K ? never : P 是判断P是否是K的子集，如果是，则不返回P

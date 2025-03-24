type First<T extends any[]> = T extends [] ? never : T[0]

type First1<T extends any[]> = T extends [] ? never : T[0]

// length 表示数组长度
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]

// infer 表示推断
type First3<T extends any[]> = T extends [infer F, ...any[]] ? F : never

// extends的规则是uninion类型会依次与每一个类型进行extends判断
type First4<T extends any[]> = T[number] extends never ? never : T[0]

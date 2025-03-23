// extends表示K必须是T的key
// keyof T表示取出T中的所有key
// [P in K]表示遍历K中的每一个key
// T[P]表示取出T中key为P的值

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

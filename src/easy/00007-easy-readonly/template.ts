// 本题关键点就是循环T的key，然后用readonly修饰，这样就实现了只读属性。

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

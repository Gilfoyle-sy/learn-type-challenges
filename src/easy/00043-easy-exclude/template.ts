// 如果T extends U，那么返回never，否则返回T
type MyExclude<T, U> = T extends U ? never : T

type MyAwaited<T> = T extends PromiseLike<infer P> ? MyAwaited<P> : T

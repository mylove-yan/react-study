背景
Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。可以将 thunk 看做 store 的 dispatch() 方法的封装器；我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象。

作者：StevenQin
链接：https://www.jianshu.com/p/51c8eaa9fa2a
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


如何理解redux-thunk 
https://zhuanlan.zhihu.com/p/85403048
##React this.setState 详解
setState(arg1,arg2) 括号内的arg1可传入两种参数，一种是对象，一种是函数. arg2为更改state之后的回调方法,arg2可为空.
###对象式的setState用法
```
//第一种
this.setState({ isAuthenticated: true});
this.setState({ isAuthenticated: true},()=>{});

this.setState(
             {isAuthenticated: true},
             () => console.log(this.state.isAuthenticated + '.'));

```
###函数式的setState用法
这个函数会接收到两个参数，第一个是当前的state值，第二个是当前的props，这个函数应该返回一个对象，这个对象代表想要对this.state的更改，换句话说，之前你想给this.setState传递什么对象参数，在这种函数里就返回什么对象，不过，计算这个对象的方法有些改变，不再依赖于this.state，而是依赖于输入参数state。
这个函数格式是固定的，必须第一个参数是state的前一个状态，第二个参数是属性对象props，这两个对象setState会自动传递到函数中去
```
//第二种 , 有两种写法 区别在于括号
this.setState((preState, props) => {
                    return {isAuthenticated: props.isAuthen}
                });

this.setState((preState, props) => ({
                    isAuthenticated: !preState.isAuthenticated
                }));
```
仔细看可以发现，前者是return了一个对象，后者直接写了一个对象，但是后者的对象外层比前者的写法多了个括号，使用时需要注意。
如果你希望在setState之前做些什么 可以使用前者的写法：
```
 this.setState((preState, props) => {
                    console.log(preState)
                    return {isAuthenticated: true}
                }, () => console.log(this.state.isAuthenticated));
//这个写法意思就是，在改变state中的数据之前，打印出当前的state，然后在更新state之后，
//利用回调打印出this.state.isAuthenticated
```

>https://blog.csdn.net/u011272795/article/details/80882567
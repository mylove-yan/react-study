import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Style from './pages/styled'
import store from './store';
import GlobalStyle from './style.js';
import FontStyle from './statics/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/styled'  component={Style}></Route>
                    <GlobalStyle/>
                   // <FontStyle/>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;

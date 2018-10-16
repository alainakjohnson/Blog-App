import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import PostsNew from "./containers/posts_new";
import rootReducer from './reducers';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise'
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxPromise)));

ReactDOM.render(
<Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/api/posts/new" component={PostsNew} />
                <Route exact path='/' component={PostsIndex}/>
                <Route path="/api/posts" component={PostsIndex} />
            </div>
        </BrowserRouter>
   </Provider>,
document.getElementById('root'));

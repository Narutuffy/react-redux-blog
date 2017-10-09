import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<Switch>
		  	<Route path="/posts/new" component={PostsNew} />
			{/* We didn't put :id before becuase it is a wildcard token and /new could've been mistakenly taken as the token */}
		  	<Route path="/posts/:id" component={PostsShow} />
  			<Route path="/" component={PostsIndex} />
  		</Switch>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

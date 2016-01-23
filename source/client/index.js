import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import reducers from 'shared/reducers';

import { Router, Route } from 'react-router';
import createContainer from 'shared/components/container';
import createHome from 'shared/components/app';
import createView from 'shared/components/view';


const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware =
  applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ createContainer(React) }>
        <IndexRoute component={ createHome(React) } />
        <Redirect from='/home' to='/' />
        <Route path='view' component={ createView(React) } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

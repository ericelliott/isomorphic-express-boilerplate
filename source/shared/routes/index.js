import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createContainer from 'shared/components/container';
import createHome from 'shared/components/app';
import createView from 'shared/components/view';

export default (React, browserHistory) => {

  return (
    <Router history={ browserHistory }>
      <Route path='/' component={ createContainer(React) }>
        <IndexRoute component={ createHome(React) } />
        <Redirect from='/home' to='/' />
        <Route path='view' component={ createView(React) } />
      </Route>
    </Router>
  );
};

import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PermissionRoute from './routes/PermissionRoute';
import Loading from './components/basic/Loading';
import Routes from './routes';
import './styles/normalize.scss';
import './styles/common.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <PermissionRoute
              config={{
                ...Routes
              }}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default hot(App);

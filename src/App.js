import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PermissionRoute from './routes/PermissionRoute';
import Loading from './components/basic/Loading';
import ErrorBoundary from './components/basic/ErrorBoundary';
import Routes from './routes';
import './styles/normalize.scss';
import './styles/common.scss';
import Config from '@root/config';
import { getCookie, removeCookie } from '@src/utils/storage';
import { message } from 'antd';

class App extends Component {
  componentDidMount() {
    const alert = getCookie('THIS_IS_GLOBAL_ALERT_NOT_USE', true);
    if (alert) {
      message[alert.type](alert.text);
      removeCookie('THIS_IS_GLOBAL_ALERT_NOT_USE');
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <PermissionRoute
                config={{
                  ...Routes
                }}
                globalConfig={Config}
              />
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default hot(App);

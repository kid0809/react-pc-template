import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken, getCookie, removeCookie } from '@src/utils/storage';
import { message } from 'antd';

class PermissionRoute extends Component {
  componentDidUpdate() {
    const alert = getCookie('THIS_IS_GLOBAL_ALERT_NOT_USE', true);
    if (alert) {
      message[alert.type](alert.text);
      removeCookie('THIS_IS_GLOBAL_ALERT_NOT_USE');
    }
  }
  render() {
    const { config: Config, location: Location, globalConfig } = this.props;
    const {
      routes,
      homePath,
      loginPath,
      notfoundPath,
      notfoundRedirect
    } = Config;
    // 访问根路由用主页模块进行渲染
    const targetRoute = routes.find(
      (item) =>
        item.path ==
                (Location.pathname == '/' ? homePath : Location.pathname)
    );
    const isLogin = getToken('isLogin');
    let out = null;
    // 访问路由不存在
    if (!targetRoute) {
      // 跳转重定向根据是否登录决定跳转地址
      if (notfoundRedirect) {
        out = <Redirect to={isLogin ? homePath : loginPath} />;
      } else {
        const {
          component: nofoundRouteComponent,
          layout: NotfoundLayout,
          title
        } = routes.find((item) => item.path == notfoundPath);
        document.title = `${title}${globalConfig.titleSuffix}`;
        out = (
          <Route
            render={(props) => {
              return isLogin ? (
                <NotfoundLayout
                  {...props}
                  component={nofoundRouteComponent}
                />
              ) : (
                <Route
                  {...props}
                  component={nofoundRouteComponent}
                />
              );
            }}
          />
        );
      }
    } else {
      // 路由存在
      const {
        loginAuth,
        component: Component,
        layout: Layout,
        title
      } = targetRoute;
      if (isLogin && loginAuth === false) {
        // 登录访问未登录才能访问的地址
        out = <Redirect to={homePath} />;
      } else if (!isLogin && loginAuth) {
        // 未登录访问登录才能访问的地址
        out = <Redirect to={loginPath} />;
      } else {
        document.title = `${title}${globalConfig.titleSuffix}`;
        out = (
          <Route
            render={(props) => {
              return Layout ? (
                <Layout
                  {...props}
                  targetRoute={targetRoute}
                  component={Component}
                />
              ) : (
                <Component
                  {...props}
                  targetRoute={targetRoute}
                />
              );
            }}
          />
        );
      }
    }
    return out;
  }
}

export default PermissionRoute;

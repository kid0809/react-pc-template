import { lazy } from 'react';

// 页面模块
const HomeComponent = lazy(() =>
    import(/* webpackChunkName: 'Home' */ '../components/business/Home')
);
const AboutComponent = lazy(() =>
    import(/* webpackChunkName: 'About' */ '../components/business/About')
);
const LoginComponent = lazy(() =>
    import(/* webpackChunkName: 'Login' */ '../components/business/Login')
);
const NoMatchComponents = lazy(() =>
    import(/* webpackChunkName: "NoMatch" */ '../components/business/NoMatch')
);

// layout模块(lazy会造成每次切换页面加载layout时，layout被视为全新的chunk，导致重复渲染问题)
import DashboardComponents from '../components/business/Dashboard';

const routes = [
  {
    path: '/home',
    title: '首页',
    menuKey: '1-1',
    loginAuth: true,
    component: HomeComponent,
    layout: DashboardComponents
  },
  {
    path: '/about',
    title: '关于',
    menuKey: '1-2',
    loginAuth: true,
    component: AboutComponent,
    layout: DashboardComponents
  },
  {
    path: '/login',
    title: '登录',
    menuKey: null,
    loginAuth: false,
    component: LoginComponent
  },
  {
    path: '/notFound',
    title: '404',
    menuKey: null,
    component: NoMatchComponents,
    layout: DashboardComponents
  }
];

export default {
  // 路由列表
  routes,
  // 首页地址
  homePath: '/home',
  // 登录页地址
  loginPath: '/login',
  // 404地址
  notfoundPath: '/notFound',
  // 访问notFound是否重定向（true：登陆前重定向至登录页，登陆后重定向至首页，false：展示404页面）
  notfoundRedirect: false
};

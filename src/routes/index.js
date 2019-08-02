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
    key: 'home',
    path: '/home',
    component: HomeComponent,
    breadcrumbName: '首页',
    loginAuth: true,
    layout: DashboardComponents
  },
  {
    key: 'about',
    path: '/about',
    component: AboutComponent,
    breadcrumbName: '关于',
    loginAuth: true,
    layout: DashboardComponents
  },
  {
    key: 'login',
    path: '/login',
    component: LoginComponent,
    loginAuth: false
  },
  {
    key: 'notFound',
    path: '/notFound',
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

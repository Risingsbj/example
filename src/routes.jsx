/**
 * 定义应用路由
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from './pages/redux/store';
import {
  Router,
  // browserHistory,
  hashHistory,
} from 'react-router';

// 路由配置规则参考： https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md#configuration-with-plain-routes
// 一下部分是由 ICE 相关工具自动生成的路由，请勿随意改变，否则可能会出现一些异常情况
// <!-- auto generated routes start -->
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import CateList from './pages/CateList';
import CreateCate from './pages/CreateCate';
import TagList from './pages/TagList';
import CreateTag from './pages/CreateTag';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import EditPassword from './pages/EditPassword';
import BasicSetting from './pages/BasicSetting';
import NavigationSetting from './pages/NavigationSetting';
import BlankLayout from './layouts/BlankLayout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const autoGeneratedRoutes = [
  {
    path: '/login',
    childRoutes: [],
    component: BlankLayout,
    indexRoute: { component: Login },
  },
  {
    path: '/setting',
    childRoutes: [
      { path: 'basic', childRoutes: [], component: BasicSetting },
      {
        path: 'navigation',
        childRoutes: [],
        component: NavigationSetting,
      },
    ],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: BasicSetting },
  },
  {
    path: '/user',
    childRoutes: [
      { path: 'list', childRoutes: [], component: UserList },
      { path: 'create', childRoutes: [], component: CreateUser },
      { path: 'pwd', childRoutes: [], component: EditPassword },
    ],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: UserList },
  },
  {
    path: '/tag',
    childRoutes: [
      { path: 'list', childRoutes: [], component: TagList },
      { path: 'create', childRoutes: [], component: CreateTag },
    ],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: TagList },
  },
  {
    path: '/cate',
    childRoutes: [
      { path: 'list', childRoutes: [], component: CateList },
      { path: 'create', childRoutes: [], component: CreateCate },
    ],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: CateList },
  },
  {
    path: '/post',
    childRoutes: [
      { path: 'list', childRoutes: [], component: PostList },
      { path: 'create', childRoutes: [], component: CreatePost },
    ],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: PostList },
  },
  {
    path: '/',
    childRoutes: [{ path: '*', childRoutes: [], component: NotFound }],
    component: HeaderAsideFooterResponsiveLayout,
    indexRoute: { component: Dashboard },
  },
];

// <!-- auto generated routes end -->

// 自定义路由，如果 path 相同则会覆盖自动生成部分的路由配置
const customRoutes = [];

export default (
<Provider store={store}>
  <Router
    history={hashHistory}
    routes={[...autoGeneratedRoutes, ...customRoutes]}
  />
  </Provider>
);
